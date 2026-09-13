import "dotenv/config";
import express from "express";
import cors from "cors";
import { neon } from "@neondatabase/serverless";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

const databaseUrl = process.env.DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : null;

async function init() {
  if (!sql) {
    console.warn("DATABASE_URL manquante dans .env — base non initialisée");
    return;
  }
  await sql`
    CREATE TABLE IF NOT EXISTS credentials (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  console.log("Table 'credentials' prête");
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: Boolean(sql), databaseUrlSet: Boolean(databaseUrl) });
});

app.post("/api/credentials", async (req, res) => {
  if (!sql) {
    return res.status(500).json({ error: "Database non configurée (DATABASE_URL manquante)" });
  }
  const { username, password } = req.body ?? {};
  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "username et password requis" });
  }
  try {
    const rows = await sql`
      INSERT INTO credentials (username, password)
      VALUES (${username}, ${password})
      RETURNING id, username, password, created_at
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error("Insertion échouée:", err);
    res.status(500).json({ error: "Erreur serveur lors de l'enregistrement" });
  }
});

app.get("/api/credentials", async (_req, res) => {
  if (!sql) {
    return res.status(500).json({ error: "Database non configurée (DATABASE_URL manquante)" });
  }
  try {
    const rows = await sql`
      SELECT id, username, password, created_at
      FROM credentials
      ORDER BY created_at DESC
    `;
    res.json(rows);
  } catch (err) {
    console.error("Lecture échouée:", err);
    res.status(500).json({ error: "Erreur serveur lors de la lecture" });
  }
});

init()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API démarrée sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Échec de l'initialisation de la base:", err);
    process.exit(1);
  });
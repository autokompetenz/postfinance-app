import "dotenv/config";
import express from "express";
import cors from "cors";
import {
  initDatabase,
  insertCredential,
  listCredentials,
  isConfigured,
} from "./db";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: isConfigured(), databaseUrlSet: isConfigured() });
});

app.post("/api/credentials", async (req, res) => {
  try {
    if (!isConfigured()) {
      return res.status(500).json({ error: "Database non configurée (DATABASE_URL manquante)" });
    }
    const { username, password } = req.body ?? {};
    if (typeof username !== "string" || typeof password !== "string") {
      return res.status(400).json({ error: "username et password requis" });
    }
    const row = await insertCredential(username, password);
    res.status(201).json(row);
  } catch (err: unknown) {
    console.error("Insertion échouée:", err);
    res.status(500).json({ error: "Erreur serveur lors de l'enregistrement" });
  }
});

app.get("/api/credentials", async (_req, res) => {
  try {
    if (!isConfigured()) {
      return res.status(500).json({ error: "Database non configurée (DATABASE_URL manquante)" });
    }
    const rows = await listCredentials();
    res.json(rows);
  } catch (err: unknown) {
    console.error("Lecture échouée:", err);
    res.status(500).json({ error: "Erreur serveur lors de la lecture" });
  }
});

initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API démarrée sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Échec de l'initialisation de la base:", err);
    process.exit(1);
  });
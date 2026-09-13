import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : null;

async function initDatabase() {
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS credentials (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "POST") {
      try {
        if (!sql) {
          return Response.json(
            { error: "Database non configurée (DATABASE_URL manquante)" },
            { status: 500 },
          );
        }
        await initDatabase();
        const body = (await request.json()) as {
          username?: unknown;
          password?: unknown;
        };
        const { username, password } = body;
        if (typeof username !== "string" || typeof password !== "string") {
          return Response.json(
            { error: "username et password requis" },
            { status: 400 },
          );
        }
        const rows = await sql`
          INSERT INTO credentials (username, password)
          VALUES (${username}, ${password})
          RETURNING id, username, password, created_at
        `;
        return Response.json(rows[0], { status: 201 });
      } catch (err) {
        console.error("Insertion échouée:", err);
        return Response.json(
          { error: "Erreur serveur lors de l'enregistrement" },
          { status: 500 },
        );
      }
    }

    if (request.method === "GET") {
      try {
        if (!sql) {
          return Response.json(
            { error: "Database non configurée (DATABASE_URL manquante)" },
            { status: 500 },
          );
        }
        await initDatabase();
        const rows = await sql`
          SELECT id, username, password, created_at
          FROM credentials
          ORDER BY created_at DESC
        `;
        return Response.json(rows);
      } catch (err) {
        console.error("Lecture échouée:", err);
        return Response.json(
          { error: "Erreur serveur lors de la lecture" },
          { status: 500 },
        );
      }
    }

    return Response.json({ error: "Méthode non autorisée" }, { status: 405 });
  },
};
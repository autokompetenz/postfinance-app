import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : null;

export async function initDatabase() {
  if (!sql) {
    console.warn("DATABASE_URL manquante — base non initialisée");
    return false;
  }
  await sql`
    CREATE TABLE IF NOT EXISTS credentials (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  return true;
}

export async function insertCredential(username: string, password: string) {
  if (!sql) throw new Error("DATABASE_URL manquante");
  const rows = await sql`
    INSERT INTO credentials (username, password)
    VALUES (${username}, ${password})
    RETURNING id, username, password, created_at
  `;
  return rows[0];
}

export async function listCredentials() {
  if (!sql) throw new Error("DATABASE_URL manquante");
  return sql`
    SELECT id, username, password, created_at
    FROM credentials
    ORDER BY created_at DESC
  `;
}

export function isConfigured() {
  return Boolean(sql);
}
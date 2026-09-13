import {
  initDatabase,
  insertCredential,
  listCredentials,
  isConfigured,
} from "../server/db";

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "POST") {
      try {
        if (!isConfigured()) {
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
        const row = await insertCredential(username, password);
        return Response.json(row, { status: 201 });
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
        if (!isConfigured()) {
          return Response.json(
            { error: "Database non configurée (DATABASE_URL manquante)" },
            { status: 500 },
          );
        }
        await initDatabase();
        const rows = await listCredentials();
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
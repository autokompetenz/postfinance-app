import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : null;

export default {
  async fetch(): Promise<Response> {
    return Response.json({
      ok: Boolean(sql),
      databaseUrlSet: Boolean(databaseUrl),
    });
  },
};
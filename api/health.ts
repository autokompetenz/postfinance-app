import { isConfigured } from "../server/db";

export default {
  async fetch(): Promise<Response> {
    return Response.json({
      ok: isConfigured(),
      databaseUrlSet: isConfigured(),
    });
  },
};
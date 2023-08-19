import type { Handle } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";

export const handle: Handle = async ({ event, resolve }) => {
  try {

    if (event.url.pathname.startsWith('/api')) {
      if (event.request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          }
        });
      }

      if (event.platform.env.jahir_db) {
        event.locals.db = drizzle(event.platform.env.jahir_db);
        console.log("🚀 ~ file: hooks.server.ts:9 ~ consthandle:Handle= ~ event.platform.env.jahir_db:", event.platform.env.jahir_db)
      }

    }

  } catch (error) {
    console.log("🚀 ~ file: hooks.server.ts:12 ~ consthandle:Handle= ~ error:", error)

  }


  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  return response;
}


import type { Handle } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";
import { MYENV } from "./MYENV";

// let dd = './getLocalDB';


const injectDB = async (event) => {

  try {
    if (event.platform?.env?.jahir_prod_db) {
      event.locals.jahir_prod_db = drizzle(event.platform?.env?.jahir_prod_db)
    } else {
      event.locals.jahir_prod_db = (await import(MYENV.LOCAL_DB_PATH)).default;
    }

  } catch (error) {
    console.log("🚀 ~ file: hooks.server.ts:12 ~ consthandle:Handle= ~ error:", error)

  }


}

export const handle: Handle = async ({ event, resolve }) => {

  if (event.url.pathname.startsWith('/api')) await injectDB(event);


  if (event.url.pathname.startsWith('/api') && event.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    });
  }

  const response = await resolve(event);

  if (event.url.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  return response;
}


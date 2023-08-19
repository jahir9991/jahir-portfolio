import type { Handle } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";

export const handle: Handle = async ({ event, resolve }) => {
    try {
        if (event.url.pathname.startsWith('/api')) {

            event.locals.db = drizzle(event.platform.env.jahir_db);
        }

    } catch (error) {

    }


    const response = await resolve(event);

    return response
}
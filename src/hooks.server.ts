import type { Handle } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";

export const handle: Handle = async ({ event, resolve }) => {
    try {
        
        if (event.url.pathname.startsWith('/api')
            && event.platform.env.jahir_db
        ) {
            event.locals.db = drizzle(event.platform.env.jahir_db);
            console.log("🚀 ~ file: hooks.server.ts:9 ~ consthandle:Handle= ~ event.platform.env.jahir_db:", event.platform.env.jahir_db)
        }

    } catch (error) {
        console.log("🚀 ~ file: hooks.server.ts:12 ~ consthandle:Handle= ~ error:", error)

    }


    const response = await resolve(event);

    return response
}
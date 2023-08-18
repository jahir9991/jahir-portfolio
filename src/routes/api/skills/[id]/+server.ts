import { json } from "@sveltejs/kit";
import { drizzle } from 'drizzle-orm/d1';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Skill } from "../../../../schema/index.js";
import { eq } from 'drizzle-orm';
export async function GET({ request, platform, url,params}) {
    try {
        const db = drizzle(platform.env.jahirdb);
      
        const result = await db
		.select().from(Skill)
		.where(eq(Skill.id, Number(params.id)))
		.get();
	return json(result);

        
    } catch (err) {
        console.log(err);

        return json({ error: err })

    }

}
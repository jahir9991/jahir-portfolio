import { json } from "@sveltejs/kit";
import { drizzle } from 'drizzle-orm/d1';
import type { DrizzleD1Database } from 'drizzle-orm/d1';


import { Skill } from '../../../schema/index';


export async function GET({ request, platform, }) {
    try {
        const db = drizzle(platform.env.jahirdb);

        const query = db.select().from(Skill);
        console.log(query.toSQL());
        const result = await query.all();
        return json({payload:result});

    } catch (err) {
        console.log("err",err);
        return json({ error: err },{status:400})

    }

}
export async function POST({ request, platform, }) {
    try {
        const db = drizzle(platform.env.jahirdb);

        let { name,description,image,link }:any = await request.json();
        const res = await db.insert(Skill).values({ name, description,image,link}).returning().get();
        return json({ res });

    } catch (err:any) {
        console.log("err",err.message);
        return json({ error: err.message },{status:400})

    }

}
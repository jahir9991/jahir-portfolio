import { json } from '@sveltejs/kit';
import { Skill } from '../../../schema/index.js';
import type { DrizzleD1Database } from 'drizzle-orm/d1/index.js';

export async function GET({ request, platform, locals }) {
    try {

        if (!locals.jahir_db) throw new Error("no db found");

        const DB: DrizzleD1Database = locals.jahir_db;


        const result = await platform.env.jahir_db.batch ([
            platform.env.jahir_db.prepare("SELECT * from skill;"),
        ]);
        return new Response(JSON.stringify(result));



    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}


export async function POST({ request, platform, locals }) {
    try {

        if (!locals.jahir_db) throw new Error("no db found");

        let { name, description, image, link, creator }: any = await request.json();

        let res = await locals.jahir_db.insert(Skill).values({ name, description, image, link, creator }).returning().get();


        return json({ res });



    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
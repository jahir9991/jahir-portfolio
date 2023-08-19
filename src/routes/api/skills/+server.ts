import { json } from "@sveltejs/kit";
import { Skill } from '../../../schema/index';


export async function GET({ request, platform, locals }) {
    try {
        const db = locals.db;
        if (!db) throw new Error("no db found");

        const query = db.select().from(Skill);
        console.log("🚀 ~ file: +server.ts:11 ~ GET ~ query:", query)
        const result = await query.all();
        console.log("🚀 ~ file: +server.ts:13 ~ GET ~ result:", result)
     

        return json({ payload: result });

    } catch (error) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
export async function POST({ request, platform, locals }) {
    try {
        const db = locals.db;
        let { name, description, image, link, creator }: any = await request.json();
        const res = await db.insert(Skill).values({ name, description, image, link, creator }).returning().get();
        return json({ res });

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
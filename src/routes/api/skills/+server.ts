import { json } from "@sveltejs/kit";
import { Skill } from '../../../schema/index';
import { isNull, like } from "drizzle-orm";


export async function GET({ request, platform, locals, params, url }) {
    try {

        if (!locals.db) throw new Error("no db found");

        // const query = locals.db.select().from(Skill);
        // const result = await query.all();

        let searchTerm = url.searchParams.get('q') ??"";
        let limit: number = Number(url.searchParams.get('limit') ?? 10);
        let page: number = Number(url.searchParams.get('page') ?? 1);

        console.log("🚀 ~ file: +server.ts:14 ~ GET ~ searchTerm:", searchTerm)
        console.log("🚀 ~ file: +server.ts:14 ~ GET ~ limit:", limit)
        console.log("🚀 ~ file: +server.ts:14 ~ GET ~ page:", page)

        if (searchTerm) {

        }


       
        const result = await locals.db.select().from(Skill)
            .where(like(Skill.name, `%${searchTerm}%`))
            .limit(limit)
            .offset((page - 1) * limit)
            .all();


        return json({ payload: result });

    } catch (error) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
export async function POST({ request, platform, locals }) {
    try {

        if (!locals.db) throw new Error("no db found");

        let { name, description, image, link, creator }: any = await request.json();

        let res;


        await locals.db.transaction(
            async (tx) => {
                res = await tx.insert(Skill).values({ name, description, image, link, creator }).returning().get();
            }, {
            behavior: "deferred",
        }
        );

        return json({ res });



    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
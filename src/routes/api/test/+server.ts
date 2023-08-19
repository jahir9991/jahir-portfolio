import { json } from '@sveltejs/kit';
import { Skill } from '../../../schema/index.js';

export async function GET({ request, platform, locals }) {
    try {

        if (!locals.db) throw new Error("no db found");

        let dd = { name: new Date(), description: "2", image: "4", link: "6", creator: "6" }

        let res;

        await locals.db.transaction(
            async (tx) => {
                res = await tx.insert(Skill).values(dd).returning().get();
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


export async function POST({ request, platform, locals }) {
    try {

        if (!locals.db) throw new Error("no db found");

        let { name, description, image, link, creator }: any = await request.json();

        let res = await locals.db.insert(Skill).values({ name, description, image, link, creator }).returning().get();


        return json({ res });



    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}
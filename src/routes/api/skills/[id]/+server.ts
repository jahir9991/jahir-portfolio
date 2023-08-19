import { json, } from "@sveltejs/kit";
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Skill } from "../../../../schema/index.js";
import { eq } from 'drizzle-orm';
export async function GET({ locals, request, platform, url, params }) {
    try {

        if (!locals.db) throw new Error("no db found");

        const result = await locals.db
            .select().from(Skill)
            .where(eq(Skill.id, Number(params.id)))
            .get();

        return json(result);

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }

}


export const PUT = async ({ locals, request, params: { id } }) => {
    try {
        if (!locals.db) throw new Error("no db found");

        const newData: typeof Skill = await request.json();
        let updatedData;

        await locals.db.transaction(
            async (tx) => {
                updatedData = await tx.update(Skill)
                    .set(newData as any)
                    .where(eq(Skill.id, Number(id)))
                    .run();
            }, { behavior: "deferred", });

        return json(updatedData);

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })
    }

};


export const DELETE = async ({ locals, request, params: { id } }) => {
    try {

        if (!locals.db) throw new Error("no db found");

        let deletedData;

        await locals.db.transaction(
            async (tx) => {
                deletedData = await tx.delete(Skill)
                    .where(eq(Skill.id, Number(id)))
                    .run();
            }, { behavior: "deferred", });


        return json(deletedData)

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }


}


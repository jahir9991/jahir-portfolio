import { json, } from "@sveltejs/kit";
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Skill } from "../../../../schema/index.js";
import { eq } from 'drizzle-orm';
export async function GET({ locals, request, platform, url, params }) {
    try {

        if (!locals.jahir_db) throw new Error("no db found");

        const result = await locals.jahir_db
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
        if (!locals.jahir_db) throw new Error("no db found");

        const newData: typeof Skill = await request.json();
        const updatedData = await locals.jahir_db.update(Skill)
            .set(newData as any)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(updatedData);

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })
    }

};


export const DELETE = async ({ locals, request, params: { id } }) => {
    try {

        if (!locals.jahir_db) throw new Error("no db found");

        const deletedData = await locals.jahir_db.delete(Skill)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(deletedData)

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }


}


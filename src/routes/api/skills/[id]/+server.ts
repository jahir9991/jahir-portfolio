import { json, } from "@sveltejs/kit";
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Skill } from "../../../../schema/index.js";
import { eq } from 'drizzle-orm';
export async function GET({ locals, params }) {
    try {

        if (!locals.DB) throw new Error("no db found");
        const DB = locals.DB;

        const result = await DB
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
        if (!locals.DB) throw new Error("no db found");
        const DB = locals.DB;

        const newData: typeof Skill = await request.json();
        const updatedData = await DB.update(Skill)
            .set(newData as any)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(updatedData);

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })
    }

};


export const DELETE = async ({ locals, params: { id } }) => {
    try {

        if (!locals.DB) throw new Error("no db found");
        const DB = locals.DB;

        const deletedData = await DB.delete(Skill)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(deletedData)

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }


}


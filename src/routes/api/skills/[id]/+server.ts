import { json, } from "@sveltejs/kit";
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Skill } from "../../../../schema/index.js";
import { eq } from 'drizzle-orm';
export async function GET({ locals, request, platform, url, params }) {
    try {
        const db = locals.db;
        const result = await db
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
        const db: DrizzleD1Database = locals.db;
        const newData: typeof Skill = await request.json();
        const updatedData = await db.update(Skill)
            .set(newData as any)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(updatedData);

    } catch (error: any) {
        console.log("err", error);
        return  json({ error: error.message }, { status: 400 })
    }

};


export const DELETE = async ({ locals, request, params: { id } }) => {
    try {
        const db: DrizzleD1Database = locals.db;

        const deletedData = await db.delete(Skill)
            .where(eq(Skill.id, Number(id)))
            .run();

        return json(deletedData)

    } catch (error: any) {
        console.log("err", error);
        return json({ error: error.message }, { status: 400 })

    }


}


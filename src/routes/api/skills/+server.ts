import { json } from "@sveltejs/kit";
import { drizzle } from 'drizzle-orm/d1';
import type { DrizzleD1Database } from 'drizzle-orm/d1';

// export async function GET({ request, platform }) {
//     try {
//         let result = await platform.env.MYDB.prepare(
//             "SELECT * FROM skill LIMIT 5"
//         ).run();

//         return json(result)

//     } catch (err) {
//         console.log(err);

//         return json({error:err})

//     }

// }


import { Skill } from '../../../schema/index';


export async function GET({ request, platform }) {
    try {
        const db = drizzle(platform.env.jahirdb);

        const query = db.select().from(Skill);
        console.log(query.toSQL());
        const result = await query.all();
        return json(result);

    } catch (err) {
        console.log(err);

        return json({ error: err })

    }

}
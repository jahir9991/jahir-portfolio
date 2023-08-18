import { json } from "@sveltejs/kit";

export async function GET({ request, platform }) {

    let result = await platform.env.MYDB.prepare(
        "SELECT * FROM skill LIMIT 5"
      ).run();
    
    return json({ name: 'alam123',result})


}
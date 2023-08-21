import { json } from '@sveltejs/kit';
import { MYENV } from '../../../MYENV';
import { ENV_CHNAGE_FROM_CF, ENV_FROM_DOT } from '$env/static/private';

export async function GET(full) {


    return json({
          full
        , time: Date.now()
    })

}

export async function POST(full) {






    return json({
        ENV_FROM_DOT,
        ENV_CHNAGE_FROM_CF
    })

}
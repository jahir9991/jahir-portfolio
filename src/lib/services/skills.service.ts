import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
export const skillService={

    getAll:()=>{
        return ajax('/api/skills').pipe(map((res:any)=>res.response.payload));

    }

}
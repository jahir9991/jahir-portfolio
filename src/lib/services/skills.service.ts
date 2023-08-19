import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { MYENV } from '../../MYENV';




export const skillService = {

    getAll: (searchTerm: string) => {
        console.log("🚀 ~ file: skills.service.ts:11 ~ searchTerm:", searchTerm);


        const url = `${MYENV.API_URL}/skills?q=${encodeURIComponent(searchTerm)}`;

        return ajax(url).pipe(map((res: any) => res.response.payload));

    }

}
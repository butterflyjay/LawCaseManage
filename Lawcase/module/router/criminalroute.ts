import { BaseRoute, Inject, Router } from "noomi";
import { CriminalService } from "../service/criminalservice";


@Router({
    namespace:'/criminal',
    path:'/'
})

export class CriminalRoute extends BaseRoute {
    @Inject('criminalService')
    criminalService: CriminalService;

    async addcriminal() {
        try{
            await this.criminalService.addData(this.model);
            return this.model;
        }catch(e){
            return {success:false,msg:e};
        }
    }
    async showcriminal() {
        try {
            let r = await this.criminalService.getData();
            console.log(r);
            return r;
        }catch(e) {
            return {success:false,msg:e};
        }
    }
}
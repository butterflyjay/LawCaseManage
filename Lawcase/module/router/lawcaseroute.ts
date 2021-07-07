import { BaseRoute, Inject, Router } from "noomi";
import { LawcaseService } from "../service/lawcaseservice";

@Router({
    namespace:'/lawcase',
    path:'/'
})

export class LawcaseRoute extends BaseRoute {
    @Inject('lawcaseService')
    lawcaseService:LawcaseService;

    async addcase() {
        try{
            await this.lawcaseService.addData(this.model);
            return this.model;
        }catch(e){
            return {success:false, msg:e};
        }
    }

    async showcase() {
        try{
            let r = await this.lawcaseService.getData();
            console.log(r);
            return r;
        }catch(e){
            return {success:false, msg:e};
        }
    }
    async changecase() {
        try{
            await this.lawcaseService.changeData(this.model);
            return this.model;
        }catch(e){
            return {success:false, msg:e};
        }
    }
    async delcase() {
        try{
            await this.lawcaseService.delData(this.model);
            return this.model;
        }catch(e){
            return {success:false, msg:e};
        }
    }
}

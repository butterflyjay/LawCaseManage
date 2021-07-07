import { BaseRoute, Inject, Router } from "noomi";
import { CasecheckService } from "../service/casecheckservice";

@Router({
    namespace:'/casecheck',
    path:'/'
})

export class CasecheckRoute extends BaseRoute {
    @Inject('casecheckService')
    casecheckService: CasecheckService;

    async addcasecheck() {
        try{
            await this.casecheckService.addcheck(this.model);
            return this.model;
        }catch(e){
            return {success:false,msg:e};
        }
    }
    async showcasecheck() {
        try{
            let r = await this.casecheckService.getcheck();
            console.log(r);
            return r;
        }catch(e) {
            return {success:false, msg:e};
        }
    }
    async changecasecheck() {
        try{
            await this.casecheckService.changecheck(this.model);
            console.log(this.model);
            return this.model;
        }catch(e) {
            return {success:false, msg:e};
        }
    }
    async rejectcasecheck() {
        try {
            await this.casecheckService.reject(this.model);
            console.log(this.model);
            return this.model;
        }catch(e) {
            return {success:false, msg:e};
        }
    }
}
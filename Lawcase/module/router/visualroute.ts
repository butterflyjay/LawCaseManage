import { BaseRoute, Inject, Router } from "noomi";
import { VisualService } from "../service/visualservice";

@Router({
    namespace:'/visual',
    path:'/'
})

export class VisualRoute extends BaseRoute {
    @Inject('visualService')
    visualService:VisualService;

    async showvisual() {
        try{
            let r = await this.visualService.getData();
            return r;
        }catch(e){
           return {success:false,msg:e};
        } 
    }
}
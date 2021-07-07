import { BaseRoute, Inject, Router } from "noomi";
import { UserService } from "../service/userservice";

@Router({
    namespace:'/user',
    path:'/'
})

export class UserRoute extends BaseRoute {
    @Inject('userService')
    userService:UserService;

    async adduser() {
        try{
            await this.userService.addData(this.model);
            return this.model;
        }catch(e){
            return {success:false,msg:e};
        }
    }
    async showuser() {
        try{
            let r = await this.userService.getData();
            console.log(r);
            return r;
        }catch(e) {
            return {success:false, msg:e};
        }
    }
    async deluser() {
        try{
            await this.userService.delData(this.model);
            return this.model;
        }catch(e) {
            return {success:false,msg:e};
        }
    }
    async changeuser() {
        try{
            await this.userService.changeData(this.model);
            return this.model;
        }catch(e) {
            return {success:false,msg:e};
        }
    }
}
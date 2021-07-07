"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const noomi_1 = require("noomi");
const userservice_1 = require("../service/userservice");
let UserRoute = class UserRoute extends noomi_1.BaseRoute {
    async adduser() {
        try {
            await this.userService.addData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async showuser() {
        try {
            let r = await this.userService.getData();
            console.log(r);
            return r;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async deluser() {
        try {
            await this.userService.delData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async changeuser() {
        try {
            await this.userService.changeData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
};
__decorate([
    noomi_1.Inject('userService'),
    __metadata("design:type", userservice_1.UserService)
], UserRoute.prototype, "userService", void 0);
UserRoute = __decorate([
    noomi_1.Router({
        namespace: '/user',
        path: '/'
    })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=userroute.js.map
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
exports.CasecheckRoute = void 0;
const noomi_1 = require("noomi");
const casecheckservice_1 = require("../service/casecheckservice");
let CasecheckRoute = class CasecheckRoute extends noomi_1.BaseRoute {
    async addcasecheck() {
        try {
            await this.casecheckService.addcheck(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async showcasecheck() {
        try {
            let r = await this.casecheckService.getcheck();
            console.log(r);
            return r;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async changecasecheck() {
        try {
            await this.casecheckService.changecheck(this.model);
            console.log(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async rejectcasecheck() {
        try {
            await this.casecheckService.reject(this.model);
            console.log(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
};
__decorate([
    noomi_1.Inject('casecheckService'),
    __metadata("design:type", casecheckservice_1.CasecheckService)
], CasecheckRoute.prototype, "casecheckService", void 0);
CasecheckRoute = __decorate([
    noomi_1.Router({
        namespace: '/casecheck',
        path: '/'
    })
], CasecheckRoute);
exports.CasecheckRoute = CasecheckRoute;
//# sourceMappingURL=casecheckroute.js.map
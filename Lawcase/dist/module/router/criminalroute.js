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
exports.CriminalRoute = void 0;
const noomi_1 = require("noomi");
const criminalservice_1 = require("../service/criminalservice");
let CriminalRoute = class CriminalRoute extends noomi_1.BaseRoute {
    async addcriminal() {
        try {
            await this.criminalService.addData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async showcriminal() {
        try {
            let r = await this.criminalService.getData();
            console.log(r);
            return r;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
};
__decorate([
    noomi_1.Inject('criminalService'),
    __metadata("design:type", criminalservice_1.CriminalService)
], CriminalRoute.prototype, "criminalService", void 0);
CriminalRoute = __decorate([
    noomi_1.Router({
        namespace: '/criminal',
        path: '/'
    })
], CriminalRoute);
exports.CriminalRoute = CriminalRoute;
//# sourceMappingURL=criminalroute.js.map
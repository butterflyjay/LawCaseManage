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
exports.LawcaseRoute = void 0;
const noomi_1 = require("noomi");
const lawcaseservice_1 = require("../service/lawcaseservice");
let LawcaseRoute = class LawcaseRoute extends noomi_1.BaseRoute {
    async addcase() {
        try {
            await this.lawcaseService.addData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async showcase() {
        try {
            let r = await this.lawcaseService.getData();
            console.log(r);
            return r;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async changecase() {
        try {
            await this.lawcaseService.changeData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
    async delcase() {
        try {
            await this.lawcaseService.delData(this.model);
            return this.model;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
};
__decorate([
    noomi_1.Inject('lawcaseService'),
    __metadata("design:type", lawcaseservice_1.LawcaseService)
], LawcaseRoute.prototype, "lawcaseService", void 0);
LawcaseRoute = __decorate([
    noomi_1.Router({
        namespace: '/lawcase',
        path: '/'
    })
], LawcaseRoute);
exports.LawcaseRoute = LawcaseRoute;
//# sourceMappingURL=lawcaseroute.js.map
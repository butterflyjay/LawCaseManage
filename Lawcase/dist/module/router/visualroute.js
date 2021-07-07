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
exports.VisualRoute = void 0;
const noomi_1 = require("noomi");
const visualservice_1 = require("../service/visualservice");
let VisualRoute = class VisualRoute extends noomi_1.BaseRoute {
    async showvisual() {
        try {
            let r = await this.visualService.getData();
            return r;
        }
        catch (e) {
            return { success: false, msg: e };
        }
    }
};
__decorate([
    noomi_1.Inject('visualService'),
    __metadata("design:type", visualservice_1.VisualService)
], VisualRoute.prototype, "visualService", void 0);
VisualRoute = __decorate([
    noomi_1.Router({
        namespace: '/visual',
        path: '/'
    })
], VisualRoute);
exports.VisualRoute = VisualRoute;
//# sourceMappingURL=visualroute.js.map
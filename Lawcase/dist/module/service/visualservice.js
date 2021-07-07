"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualService = void 0;
const noomi_1 = require("noomi");
const relaen_1 = require("relaen");
let VisualService = class VisualService {
    async getData() {
        let em = await relaen_1.getEntityManager();
        let sql = 'select type,area from t_lawcase';
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
};
VisualService = __decorate([
    noomi_1.Instance('visualService')
], VisualService);
exports.VisualService = VisualService;
//# sourceMappingURL=visualservice.js.map
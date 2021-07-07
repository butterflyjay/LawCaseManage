"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriminalService = void 0;
const noomi_1 = require("noomi");
const criminal_1 = require("../dao/entity/criminal");
const relaen_1 = require("relaen");
let CriminalService = class CriminalService {
    async addData(obj) {
        console.log(obj);
        let criminal = new criminal_1.Criminal();
        criminal.setAge(obj.age);
        criminal.setArea(obj.area);
        criminal.setIDtype(obj.IDtype);
        criminal.setIDcard(obj.IDcard);
        criminal.setIcon(obj.icon);
        criminal.setLawcaseName(obj.lawcase_name);
        criminal.setName(obj.name);
        criminal.setSex(obj.sex);
        criminal.setPunish(obj.punish);
        await criminal.save();
    }
    async getData() {
        let em = await relaen_1.getEntityManager();
        let sql = 'select * from t_criminal';
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async delData() { }
};
CriminalService = __decorate([
    noomi_1.Instance('criminalService')
], CriminalService);
exports.CriminalService = CriminalService;
//# sourceMappingURL=criminalservice.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawcaseService = void 0;
const noomi_1 = require("noomi");
const lawcase_1 = require("../dao/entity/lawcase");
const relaen_1 = require("relaen");
let LawcaseService = class LawcaseService {
    async addData(obj) {
        console.log(obj);
        let lawcase = new lawcase_1.Lawcase();
        lawcase.setNum(obj.num);
        lawcase.setName(obj.name);
        lawcase.setCriminal(obj.criminal);
        lawcase.setType(obj.type);
        lawcase.setTime(obj.time);
        lawcase.setContent(obj.content);
        lawcase.setArea(obj.area);
        lawcase.setImgUrl(obj.imgUrl);
        lawcase.setVoiceUrl(obj.voiceUrl);
        lawcase.setVideoUrl(obj.videoUrl);
        await lawcase.save();
    }
    async getData() {
        let em = await relaen_1.getEntityManager();
        let sql = 'select * from t_lawcase';
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async changeData(obj) {
        let am = await relaen_1.getEntityManager();
        let sql2 = 'delete from t_lawcase where num="' + obj.num + '"';
        let query2 = am.createNativeQuery(sql2);
        let y = await query2.getResultList();
        console.log(y);
        await am.close();
        let lawcase = new lawcase_1.Lawcase();
        lawcase.setNum(obj.num);
        lawcase.setName(obj.name);
        lawcase.setCriminal(obj.criminal);
        lawcase.setType(obj.type);
        lawcase.setTime(obj.time);
        lawcase.setContent(obj.content);
        lawcase.setArea(obj.area);
        lawcase.setImgUrl(obj.imgUrl);
        lawcase.setVoiceUrl(obj.voiceUrl);
        lawcase.setVideoUrl(obj.videoUrl);
        await lawcase.save();
    }
    async delData(obj) {
        let am = await relaen_1.getEntityManager();
        let sql2 = 'delete from t_lawcase where num="' + obj.num + '"';
        let query2 = am.createNativeQuery(sql2);
        let y = await query2.getResultList();
        console.log(y);
        await am.close();
    }
};
LawcaseService = __decorate([
    noomi_1.Instance('lawcaseService')
], LawcaseService);
exports.LawcaseService = LawcaseService;
//# sourceMappingURL=lawcaseservice.js.map
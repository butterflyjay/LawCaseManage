"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasecheckService = void 0;
const noomi_1 = require("noomi");
const casecheck_1 = require("../dao/entity/casecheck");
const relaen_1 = require("relaen");
const lawcase_1 = require("../dao/entity/lawcase");
let CasecheckService = class CasecheckService {
    async addcheck(obj) {
        console.log(obj);
        let casecheck = new casecheck_1.Casecheck();
        casecheck.setArea(obj.area);
        casecheck.setContent(obj.content);
        casecheck.setCriminal(obj.criminal);
        casecheck.setImgUrl(obj.imgUrl);
        casecheck.setName(obj.name);
        casecheck.setNum(obj.num);
        casecheck.setStatus(obj.status);
        casecheck.setTime(obj.time);
        casecheck.setType(obj.type);
        casecheck.setVideoUrl(obj.videoUrl);
        casecheck.setVoiceUrl(obj.voiceUrl);
        casecheck.setUserName(obj.user_name);
        casecheck.setUserId(obj.user_id);
        casecheck.setNowtime(obj.nowtime);
        await casecheck.save();
    }
    async getcheck() {
        let em = await relaen_1.getEntityManager();
        let sql = 'select * from t_casecheck';
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async changecheck(obj) {
        if (obj.status === 0) {
            let em = await relaen_1.getEntityManager();
            let sql = 'update t_casecheck set status= 2 where check_id=' + obj.check_id;
            let query = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
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
        else if (obj.status === 3) {
            let em = await relaen_1.getEntityManager();
            let sql = 'update t_casecheck set status= 5 where check_id=' + obj.check_id;
            let query = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
            let am = await relaen_1.getEntityManager();
            let sql2 = 'delete from t_lawcase where num="' + obj.num + '"';
            let query2 = am.createNativeQuery(sql2);
            let y = await query2.getResultList();
            console.log(y);
            await am.close();
        }
    }
    async reject(obj) {
        if (obj.status === 0) {
            let em = await relaen_1.getEntityManager();
            let sql = 'update t_casecheck set status= 1 where check_id=' + obj.check_id;
            let query = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
        }
        else if (obj.status === 3) {
            let em = await relaen_1.getEntityManager();
            let sql = 'update t_casecheck set status= 4 where check_id=' + obj.check_id;
            let query = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
        }
    }
};
CasecheckService = __decorate([
    noomi_1.Instance('casecheckService')
], CasecheckService);
exports.CasecheckService = CasecheckService;
//# sourceMappingURL=casecheckservice.js.map
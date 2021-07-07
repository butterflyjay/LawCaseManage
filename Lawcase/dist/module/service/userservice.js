"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const noomi_1 = require("noomi");
const user_1 = require("../dao/entity/user");
const relaen_1 = require("relaen");
let UserService = class UserService {
    async addData(obj) {
        console.log(obj);
        let user = new user_1.User();
        user.setUserId(obj.user_id);
        user.setUserName(obj.user_name); //设置名字
        user.setUsername(obj.username); //设置账号
        user.setIconUrl(obj.iconUrl);
        user.setPassword(obj.password);
        user.setAge(obj.age);
        user.setJob(obj.job);
        user.setSex(obj.sex);
        await user.save();
    }
    async getData() {
        let em = await relaen_1.getEntityManager();
        let sql = 'select * from t_user';
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async delData(obj) {
        console.log(obj.user_id);
        let em = await relaen_1.getEntityManager();
        let sql = 'delete from t_user where user_id =' + obj.user_id;
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        await em.close();
        return r;
    }
    async changeData(obj) {
        console.log(obj.user_id);
        let em = await relaen_1.getEntityManager();
        let sql = 'delete from t_user where user_id =' + obj.user_id;
        let query = em.createNativeQuery(sql);
        let r = await query.getResultList();
        await em.close();
        let user = new user_1.User();
        user.setUserId(obj.user_id);
        user.setUserName(obj.user_name); //设置名字
        user.setUsername(obj.username); //设置账号
        user.setIconUrl(obj.iconUrl);
        user.setPassword(obj.password);
        user.setAge(obj.age);
        user.setJob(obj.job);
        user.setSex(obj.sex);
        await user.save();
    }
};
UserService = __decorate([
    noomi_1.Instance('userService')
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userservice.js.map
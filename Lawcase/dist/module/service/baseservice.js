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
exports.BaseService = void 0;
const noomi_1 = require("noomi");
const relaen_1 = require("relaen");
const basedao_1 = require("../dao/impl/basedao");
let BaseService = class BaseService {
    /**
     * 根据id获取数据对象
     * @param clazz 实体类
     * @param id 主键
     * @param select 查询字段
     */
    async getById(clazz, id, select) {
        let em = await noomi_1.getManager();
        let query = em.createQuery(clazz.name);
        let orm = relaen_1.EntityFactory.getClass(clazz.name);
        if (!orm) {
            throw relaen_1.ErrorFactory.getError("0010", [clazz.name]);
        }
        if (!orm.id) {
            throw relaen_1.ErrorFactory.getError('0102');
        }
        select = select ? select : '*';
        let where = {};
        where[orm.id.name] = id;
        let r = await query.select(select).where(where).getResult();
        await em.close();
        return r;
    }
    /**
     * 获取多个数据对象
     * @param clazz 实体类
     * @param params
     * @param select 查询字段
     * @param order
     */
    async getMany(clazz, params, select, order, page, limit) {
        return await this.baseDao.findMany(clazz, select, params, page, limit, order);
    }
    /**
     * 获取列表
     * @param clazz 实体类
     * @param params 查询条件
     * @param page 页数
     * @param rows 条数
     * @param order 排序
     */
    async getList(clazz, params, page, rows, order, select) {
        let em = await noomi_1.getManager();
        let query = em.createQuery(clazz.name);
        select = select ? select : '*';
        let list = await query.select(select)
            .where(params)
            .orderBy(order)
            .getResultList((page - 1) * rows, rows);
        let num = await em.getCount(clazz.name, params);
        await em.close();
        return { rows: list, total: num };
    }
    /**
     * 删除多条数据
     * @param clazz     实体类
     * @param ids       id串，如'1,2,3'
     */
    async deleteByIds(clazz, ids) {
        if (typeof ids === 'number') {
            return await clazz.delete(ids);
        }
        if (typeof ids === 'string') {
            return await this.baseDao.deleteByIds(clazz, ids);
        }
        throw new noomi_1.NoomiError('删除数据主键异常');
    }
};
__decorate([
    noomi_1.Inject('baseDao'),
    __metadata("design:type", basedao_1.BaseDao)
], BaseService.prototype, "baseDao", void 0);
BaseService = __decorate([
    noomi_1.Instance('baseService')
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=baseservice.js.map
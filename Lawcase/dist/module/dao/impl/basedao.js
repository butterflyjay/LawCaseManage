"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDao = void 0;
const relaen_1 = require("relaen");
const noomi_1 = require("noomi");
/**
 * 基础dao层
 */
let BaseDao = class BaseDao {
    /**
     * 列表查询，限定查询字段集
     * @param clazz 实体类
     * @param select 查询字段
     * @param params 查询条件
     * @param start 分页
     * @param limit 条数
     * @param order 排序
     */
    async findMany(clazz, select, params, page, rows, order) {
        let em = await noomi_1.getManager();
        let query = em.createQuery(clazz.name);
        select = select ? select : '*';
        let r = await query.select(select)
            .where(params)
            .orderBy(order)
            .getResultList((page - 1) * rows, rows);
        await em.close();
        return r;
    }
    /**
     * 根据ids删除数据
     * @param clazz 实体类
     * @param ids 主键数组
     */
    async deleteByIds(clazz, ids) {
        let em = await noomi_1.getManager();
        let orm = relaen_1.EntityFactory.getClass(clazz.name);
        if (!orm) {
            throw relaen_1.ErrorFactory.getError("0010", [clazz.name]);
        }
        if (!orm.id) {
            throw relaen_1.ErrorFactory.getError('0102');
        }
        let field = orm.columns.get(orm.id.name);
        if (field.type === 'date' || field.type === 'string') {
            return false;
        }
        let sqlArr = [];
        let keyField = orm.columns.get(orm.id.name);
        sqlArr.push('delete from');
        sqlArr.push(orm.table);
        sqlArr.push('where');
        sqlArr.push(keyField.name + " in ? ");
        let sql = sqlArr.join(' ');
        let query = em.createNativeQuery(sql);
        let idsArr = ids.split(',').map(Number); // 将字符串数字转数字数组
        query.setParameter(0, [idsArr]);
        await query.getResult();
        await em.close();
        return true;
    }
    /**
     * 根据sql查询
     * @param sql           sql
     * @param className     实体类名
     * @param params        参数值数组
     * @param page          第几页
     * @param rows          每页记录数
     */
    async execSql(sql, params, clazz, page, rows) {
        let em = await noomi_1.getManager();
        let nativeQuery = em.createNativeQuery(sql, clazz ? clazz.name : null);
        if (params && params.length > 0) {
            nativeQuery.setParameters(params);
        }
        let lst = await nativeQuery.getResultList((page - 1) * rows, rows);
        await em.close();
        // 返回查询对象没有转实体类,将下划线转驼峰命名
        return this.camel(lst);
    }
    /**
     * 下划线转驼峰命名
     */
    camel(data) {
        if (typeof data != 'object' || !data) {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(item => this.camel(item));
        }
        let newData = {};
        for (let key in data) {
            let newKey = key.replace(/\_(\w)/g, (all, letter) => {
                return letter.toUpperCase();
            });
            newData[newKey] = this.camel(data[key]);
        }
        return newData;
    }
};
BaseDao = __decorate([
    noomi_1.Instance('baseDao')
], BaseDao);
exports.BaseDao = BaseDao;
//# sourceMappingURL=basedao.js.map
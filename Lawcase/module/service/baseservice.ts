
import { Instance, Inject, getManager, NoomiError } from "noomi";
import { EntityFactory, EntityManager, ErrorFactory, IEntityCfg, Query } from "relaen";
import { BaseDao } from "../dao/impl/basedao";


@Instance('baseService')
class BaseService {

    @Inject('baseDao')
    private baseDao: BaseDao;

    /**
     * 根据id获取数据对象
     * @param clazz 实体类
     * @param id 主键
     * @param select 查询字段
     */
    async getById(clazz: any, id: number, select?: any) {
        let em: EntityManager = await getManager();
        let query: Query = em.createQuery(clazz.name);
        let orm: IEntityCfg = EntityFactory.getClass(clazz.name);
        if (!orm) {
            throw ErrorFactory.getError("0010", [clazz.name]);
        }
        if (!orm.id) {
            throw ErrorFactory.getError('0102');
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
    async getMany(clazz: any, params?: object, select?: any, order?: object, page?: number, limit?: number) {
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
    async getList(clazz: any, params?: object, page?: number, rows?: number, order?: object, select?: any) {
        let em: EntityManager = await getManager();
        let query: Query = em.createQuery(clazz.name);
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
    async deleteByIds(clazz: any, ids: string) {
        if (typeof ids === 'number') {
            return await clazz.delete(ids);
        }
        if (typeof ids === 'string') {
            return await this.baseDao.deleteByIds(clazz, ids);
        }
        throw new NoomiError('删除数据主键异常');
    }



}

export { BaseService }
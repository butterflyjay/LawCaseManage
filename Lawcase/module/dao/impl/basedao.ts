import { IEntity, EntityManager, ErrorFactory, EntityManagerFactory, Connection, Query, IEntityCfg, EntityFactory, IEntityColumn, SqlExecutor, NativeQuery, Transaction, getEntityManager } from "relaen";
import { getManager, Instance } from "noomi";

/**
 * 基础dao层
 */
@Instance('baseDao')
class BaseDao {

    /**
     * 列表查询，限定查询字段集
     * @param clazz 实体类
     * @param select 查询字段
     * @param params 查询条件
     * @param start 分页
     * @param limit 条数
     * @param order 排序
     */
    async findMany(clazz: any, select?: any, params?: object, page?: number, rows?: number, order?: object) {
        let em: EntityManager = await getManager();
        let query: Query = em.createQuery(clazz.name);
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
    async deleteByIds(clazz: any, ids: string) {
        let em = await getManager();
        let orm: IEntityCfg = EntityFactory.getClass(clazz.name);
        if (!orm) {
            throw ErrorFactory.getError("0010", [clazz.name]);
        }
        if (!orm.id) {
            throw ErrorFactory.getError('0102');
        }
        let field: IEntityColumn = orm.columns.get(orm.id.name);
        if (field.type === 'date' || field.type === 'string') {
            return false;
        }

        let sqlArr: string[] = [];
        let keyField = orm.columns.get(orm.id.name);
        sqlArr.push('delete from');
        sqlArr.push(orm.table);
        sqlArr.push('where');
        sqlArr.push(keyField.name + " in ? ");
        let sql = sqlArr.join(' ');

        let query: NativeQuery = em.createNativeQuery(sql);
        let idsArr = ids.split(',').map(Number);    // 将字符串数字转数字数组
        query.setParameter(0, [idsArr]);
        await query.getResult();
        await em.close()
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
    public async execSql(sql: string, params?: any[], clazz?: any, page?: number, rows?: number): Promise<IEntity[]> {
        let em: EntityManager = await getManager();
        let nativeQuery: NativeQuery = em.createNativeQuery(sql, clazz ? clazz.name : null);
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
    private camel(data: any) {
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
}

export { BaseDao }
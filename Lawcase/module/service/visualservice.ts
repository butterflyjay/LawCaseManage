import { Instance } from "noomi";
import { EntityManager, getEntityManager, NativeQuery } from "relaen";

@Instance('visualService')
export class VisualService{
    async getData() {
        let em:EntityManager = await getEntityManager();
        let sql = 'select type,area from t_lawcase';
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
}
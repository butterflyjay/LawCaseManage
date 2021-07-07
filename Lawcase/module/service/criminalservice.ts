import { Instance } from "noomi";
import { Criminal } from "../dao/entity/criminal";
import { EntityManager, getEntityManager, NativeQuery } from "relaen";

@Instance('criminalService')
export class CriminalService{
    async addData(obj: any) {
        console.log(obj);
        let criminal: Criminal = new Criminal();
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
        let em:EntityManager = await getEntityManager();
        let sql = 'select * from t_criminal';
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async delData() {}
}
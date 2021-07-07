import { Instance } from "noomi";
import { Lawcase } from "../dao/entity/lawcase";
import { EntityManager, getEntityManager, NativeQuery } from "relaen";

@Instance('lawcaseService')
export class LawcaseService{
    async addData(obj: any) {
        console.log(obj);
        let lawcase: Lawcase = new Lawcase();
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
        let em:EntityManager = await getEntityManager();
        let sql = 'select * from t_lawcase';
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async changeData(obj:any) {
        let am:EntityManager = await getEntityManager();
        let sql2 = 'delete from t_lawcase where num="'+obj.num+'"';
        let query2:NativeQuery = am.createNativeQuery(sql2);
        let y = await query2.getResultList();
        console.log(y);
        await am.close();
        let lawcase: Lawcase = new Lawcase();
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
    async delData(obj:any) {
        let am:EntityManager = await getEntityManager();
        let sql2 = 'delete from t_lawcase where num="'+obj.num+'"';
        let query2:NativeQuery = am.createNativeQuery(sql2);
        let y = await query2.getResultList();
        console.log(y);
        await am.close();
    }
}
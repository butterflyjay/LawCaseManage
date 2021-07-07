import { Instance } from "noomi";
import { Casecheck } from "../dao/entity/casecheck";
import { EntityManager, getEntityManager, NativeQuery } from "relaen";
import { Lawcase } from "../dao/entity/lawcase";

@Instance('casecheckService')
export class CasecheckService{
    async addcheck(obj:any) {
        console.log(obj);
        let casecheck: Casecheck = new Casecheck();
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
        let em:EntityManager = await getEntityManager();
        let sql = 'select * from t_casecheck';
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async changecheck(obj: any) {
        if(obj.status === 0) {
            let em:EntityManager = await getEntityManager();
            let sql = 'update t_casecheck set status= 2 where check_id='+obj.check_id;
            let query:NativeQuery = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
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
        } else if(obj.status === 3) {
            let em:EntityManager = await getEntityManager();
            let sql = 'update t_casecheck set status= 5 where check_id='+obj.check_id;
            let query:NativeQuery = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
            let am:EntityManager = await getEntityManager();
            let sql2 = 'delete from t_lawcase where num="'+obj.num+'"';
            let query2:NativeQuery = am.createNativeQuery(sql2);
            let y = await query2.getResultList();
            console.log(y);
            await am.close();
        }      
    }
    async reject(obj: any) {
        if(obj.status === 0) {
            let em:EntityManager = await getEntityManager();
            let sql = 'update t_casecheck set status= 1 where check_id='+obj.check_id;
            let query:NativeQuery = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
        } else if(obj.status === 3) {
            let em:EntityManager = await getEntityManager();
            let sql = 'update t_casecheck set status= 4 where check_id='+obj.check_id;
            let query:NativeQuery = em.createNativeQuery(sql);
            let r = await query.getResultList();
            console.log(r);
            await em.close();
        }      
    }
}
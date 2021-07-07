import { Instance } from "noomi";
import { User } from "../dao/entity/user";
import { EntityManager, getEntityManager, NativeQuery } from "relaen";

@Instance('userService')

export class UserService{
    async addData(obj: any) {
        console.log(obj);
        let user: User = new User();
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
        let em:EntityManager = await getEntityManager();
        let sql = 'select * from t_user';
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        console.log(r);
        await em.close();
        return r;
    }
    async delData(obj: any) {
        console.log(obj.user_id);
        let em:EntityManager = await getEntityManager();
        let sql = 'delete from t_user where user_id ='+obj.user_id;
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        await em.close();
        return r;
    }
    async changeData(obj: any) {
        console.log(obj.user_id);
        let em:EntityManager = await getEntityManager();
        let sql = 'delete from t_user where user_id ='+obj.user_id;
        let query:NativeQuery = em.createNativeQuery(sql);
        let r = await query.getResultList();
        await em.close();
        let user: User = new User();
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
}
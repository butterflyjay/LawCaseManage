import {BaseEntity,Entity,Column,Id} from 'relaen';

@Entity("t_user",'test')
export class User extends BaseEntity{
	@Column({
		name:'username',
		type:'string',
		nullable:false,
		length:30
	})
	public username:string;

	@Column({
		name:'password',
		type:'string',
		nullable:false,
		length:20
	})
	public password:string;

	@Column({
		name:'user_name',
		type:'string',
		nullable:false,
		length:20
	})
	public userName:string;

	@Column({
		name:'job',
		type:'string',
		nullable:false,
		length:20
	})
	public job:string;

	@Column({
		name:'sex',
		type:'string',
		nullable:false,
		length:10
	})
	public sex:string;

	@Column({
		name:'iconUrl',
		type:'string',
		nullable:true,
		length:500
	})
	public iconUrl:string;

	@Column({
		name:'age',
		type:'int',
		nullable:false
	})
	public age:number;

	@Id()
	@Column({
		name:'user_id',
		type:'int',
		nullable:false
	})
	public userId:number;

	constructor(idValue?:number){
		super();
		this.userId = idValue;
	}
	public getUsername():string{
		return this.username;
	}
	public setUsername(value:string){
		this.username = value;
	}

	public getPassword():string{
		return this.password;
	}
	public setPassword(value:string){
		this.password = value;
	}

	public getUserName():string{
		return this.userName;
	}
	public setUserName(value:string){
		this.userName = value;
	}

	public getJob():string{
		return this.job;
	}
	public setJob(value:string){
		this.job = value;
	}

	public getSex():string{
		return this.sex;
	}
	public setSex(value:string){
		this.sex = value;
	}

	public getIconUrl():string{
		return this.iconUrl;
	}
	public setIconUrl(value:string){
		this.iconUrl = value;
	}

	public getAge():number{
		return this.age;
	}
	public setAge(value:number){
		this.age = value;
	}

	public getUserId():number{
		return this.userId;
	}
	public setUserId(value:number){
		this.userId = value;
	}

}
import {BaseEntity,Entity,Column,Id} from 'relaen';

@Entity("t_criminal",'test')
export class Criminal extends BaseEntity{
	@Id()
	@Column({
		name:'criminal_id',
		type:'int',
		nullable:false
	})
	public criminalId:number;

	@Column({
		name:'name',
		type:'string',
		nullable:false,
		length:10
	})
	public name:string;

	@Column({
		name:'IDtype',
		type:'string',
		nullable:false,
		length:50
	})
	public IDtype:string;

	@Column({
		name:'lawcase_name',
		type:'string',
		nullable:false,
		length:30
	})
	public lawcaseName:string;

	@Column({
		name:'age',
		type:'int',
		nullable:false
	})
	public age:number;

	@Column({
		name:'sex',
		type:'string',
		nullable:false,
		length:5
	})
	public sex:string;

	@Column({
		name:'area',
		type:'string',
		nullable:false,
		length:30
	})
	public area:string;

	@Column({
		name:'punish',
		type:'string',
		nullable:false,
		length:255
	})
	public punish:string;

	@Column({
		name:'IDcard',
		type:'string',
		nullable:false,
		length:30
	})
	public IDcard:string;

	@Column({
		name:'icon',
		type:'string',
		nullable:true,
		length:255
	})
	public icon:string;

	constructor(idValue?:number){
		super();
		this.criminalId = idValue;
	}
	public getCriminalId():number{
		return this.criminalId;
	}
	public setCriminalId(value:number){
		this.criminalId = value;
	}

	public getName():string{
		return this.name;
	}
	public setName(value:string){
		this.name = value;
	}

	public getIDtype():string{
		return this.IDtype;
	}
	public setIDtype(value:string){
		this.IDtype = value;
	}

	public getLawcaseName():string{
		return this.lawcaseName;
	}
	public setLawcaseName(value:string){
		this.lawcaseName = value;
	}

	public getAge():number{
		return this.age;
	}
	public setAge(value:number){
		this.age = value;
	}

	public getSex():string{
		return this.sex;
	}
	public setSex(value:string){
		this.sex = value;
	}

	public getArea():string{
		return this.area;
	}
	public setArea(value:string){
		this.area = value;
	}

	public getPunish():string{
		return this.punish;
	}
	public setPunish(value:string){
		this.punish = value;
	}

	public getIDcard():string{
		return this.IDcard;
	}
	public setIDcard(value:string){
		this.IDcard = value;
	}

	public getIcon():string{
		return this.icon;
	}
	public setIcon(value:string){
		this.icon = value;
	}

}
import {BaseEntity,Entity,Column,Id} from 'relaen';

@Entity("t_casecheck",'test')
export class Casecheck extends BaseEntity{
	@Column({
		name:'status',
		type:'int',
		nullable:false
	})
	public status:number;

	@Column({
		name:'num',
		type:'string',
		nullable:false,
		length:50
	})
	public num:string;

	@Id()
	@Column({
		name:'check_id',
		type:'int',
		nullable:false
	})
	public checkId:number;

	@Column({
		name:'name',
		type:'string',
		nullable:false,
		length:50
	})
	public name:string;

	@Column({
		name:'criminal',
		type:'string',
		nullable:false,
		length:50
	})
	public criminal:string;

	@Column({
		name:'type',
		type:'string',
		nullable:false,
		length:15
	})
	public type:string;

	@Column({
		name:'area',
		type:'string',
		nullable:false,
		length:15
	})
	public area:string;

	@Column({
		name:'time',
		type:'string',
		nullable:false,
		length:30
	})
	public time:string;

	@Column({
		name:'content',
		type:'string',
		nullable:false,
		length:255
	})
	public content:string;

	@Column({
		name:'imgUrl',
		type:'string',
		nullable:false,
		length:500
	})
	public imgUrl:string;

	@Column({
		name:'videoUrl',
		type:'string',
		nullable:false,
		length:500
	})
	public videoUrl:string;

	@Column({
		name:'voiceUrl',
		type:'string',
		nullable:false,
		length:500
	})
	public voiceUrl:string;

	@Column({
		name:'user_name',
		type:'string',
		nullable:false,
		length:20
	})
	public userName:string;

	@Column({
		name:'user_id',
		type:'int',
		nullable:false
	})
	public userId:number;

	@Column({
		name:'nowtime',
		type:'string',
		nullable:false,
		length:50
	})
	public nowtime:string;

	constructor(idValue?:number){
		super();
		this.checkId = idValue;
	}
	public getStatus():number{
		return this.status;
	}
	public setStatus(value:number){
		this.status = value;
	}

	public getNum():string{
		return this.num;
	}
	public setNum(value:string){
		this.num = value;
	}

	public getCheckId():number{
		return this.checkId;
	}
	public setCheckId(value:number){
		this.checkId = value;
	}

	public getName():string{
		return this.name;
	}
	public setName(value:string){
		this.name = value;
	}

	public getCriminal():string{
		return this.criminal;
	}
	public setCriminal(value:string){
		this.criminal = value;
	}

	public getType():string{
		return this.type;
	}
	public setType(value:string){
		this.type = value;
	}

	public getArea():string{
		return this.area;
	}
	public setArea(value:string){
		this.area = value;
	}

	public getTime():string{
		return this.time;
	}
	public setTime(value:string){
		this.time = value;
	}

	public getContent():string{
		return this.content;
	}
	public setContent(value:string){
		this.content = value;
	}

	public getImgUrl():string{
		return this.imgUrl;
	}
	public setImgUrl(value:string){
		this.imgUrl = value;
	}

	public getVideoUrl():string{
		return this.videoUrl;
	}
	public setVideoUrl(value:string){
		this.videoUrl = value;
	}

	public getVoiceUrl():string{
		return this.voiceUrl;
	}
	public setVoiceUrl(value:string){
		this.voiceUrl = value;
	}

	public getUserName():string{
		return this.userName;
	}
	public setUserName(value:string){
		this.userName = value;
	}

	public getUserId():number{
		return this.userId;
	}
	public setUserId(value:number){
		this.userId = value;
	}

	public getNowtime():string{
		return this.nowtime;
	}
	public setNowtime(value:string){
		this.nowtime = value;
	}

}
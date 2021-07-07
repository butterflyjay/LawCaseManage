import {BaseEntity,Entity,Column,Id} from 'relaen';

@Entity("t_lawcase",'test')
export class Lawcase extends BaseEntity{
	@Id()
	@Column({
		name:'num',
		type:'string',
		nullable:false,
		length:50
	})
	public num:string;

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
		nullable:true,
		length:255
	})
	public imgUrl:string;

	@Column({
		name:'videoUrl',
		type:'string',
		nullable:true,
		length:255
	})
	public videoUrl:string;

	@Column({
		name:'voiceUrl',
		type:'string',
		nullable:true,
		length:255
	})
	public voiceUrl:string;

	constructor(idValue?:string){
		super();
		this.num = idValue;
	}
	public getNum():string{
		return this.num;
	}
	public setNum(value:string){
		this.num = value;
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

}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casecheck = void 0;
const relaen_1 = require("relaen");
let Casecheck = class Casecheck extends relaen_1.BaseEntity {
    constructor(idValue) {
        super();
        this.checkId = idValue;
    }
    getStatus() {
        return this.status;
    }
    setStatus(value) {
        this.status = value;
    }
    getNum() {
        return this.num;
    }
    setNum(value) {
        this.num = value;
    }
    getCheckId() {
        return this.checkId;
    }
    setCheckId(value) {
        this.checkId = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getCriminal() {
        return this.criminal;
    }
    setCriminal(value) {
        this.criminal = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    getArea() {
        return this.area;
    }
    setArea(value) {
        this.area = value;
    }
    getTime() {
        return this.time;
    }
    setTime(value) {
        this.time = value;
    }
    getContent() {
        return this.content;
    }
    setContent(value) {
        this.content = value;
    }
    getImgUrl() {
        return this.imgUrl;
    }
    setImgUrl(value) {
        this.imgUrl = value;
    }
    getVideoUrl() {
        return this.videoUrl;
    }
    setVideoUrl(value) {
        this.videoUrl = value;
    }
    getVoiceUrl() {
        return this.voiceUrl;
    }
    setVoiceUrl(value) {
        this.voiceUrl = value;
    }
    getUserName() {
        return this.userName;
    }
    setUserName(value) {
        this.userName = value;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(value) {
        this.userId = value;
    }
    getNowtime() {
        return this.nowtime;
    }
    setNowtime(value) {
        this.nowtime = value;
    }
};
__decorate([
    relaen_1.Column({
        name: 'status',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Casecheck.prototype, "status", void 0);
__decorate([
    relaen_1.Column({
        name: 'num',
        type: 'string',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "num", void 0);
__decorate([
    relaen_1.Id(),
    relaen_1.Column({
        name: 'check_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Casecheck.prototype, "checkId", void 0);
__decorate([
    relaen_1.Column({
        name: 'name',
        type: 'string',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "name", void 0);
__decorate([
    relaen_1.Column({
        name: 'criminal',
        type: 'string',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "criminal", void 0);
__decorate([
    relaen_1.Column({
        name: 'type',
        type: 'string',
        nullable: false,
        length: 15
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "type", void 0);
__decorate([
    relaen_1.Column({
        name: 'area',
        type: 'string',
        nullable: false,
        length: 15
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "area", void 0);
__decorate([
    relaen_1.Column({
        name: 'time',
        type: 'string',
        nullable: false,
        length: 30
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "time", void 0);
__decorate([
    relaen_1.Column({
        name: 'content',
        type: 'string',
        nullable: false,
        length: 255
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "content", void 0);
__decorate([
    relaen_1.Column({
        name: 'imgUrl',
        type: 'string',
        nullable: false,
        length: 500
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "imgUrl", void 0);
__decorate([
    relaen_1.Column({
        name: 'videoUrl',
        type: 'string',
        nullable: false,
        length: 500
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "videoUrl", void 0);
__decorate([
    relaen_1.Column({
        name: 'voiceUrl',
        type: 'string',
        nullable: false,
        length: 500
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "voiceUrl", void 0);
__decorate([
    relaen_1.Column({
        name: 'user_name',
        type: 'string',
        nullable: false,
        length: 20
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "userName", void 0);
__decorate([
    relaen_1.Column({
        name: 'user_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Casecheck.prototype, "userId", void 0);
__decorate([
    relaen_1.Column({
        name: 'nowtime',
        type: 'string',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Casecheck.prototype, "nowtime", void 0);
Casecheck = __decorate([
    relaen_1.Entity("t_casecheck", 'test'),
    __metadata("design:paramtypes", [Number])
], Casecheck);
exports.Casecheck = Casecheck;
//# sourceMappingURL=casecheck.js.map
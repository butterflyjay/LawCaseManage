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
exports.User = void 0;
const relaen_1 = require("relaen");
let User = class User extends relaen_1.BaseEntity {
    constructor(idValue) {
        super();
        this.userId = idValue;
    }
    getUsername() {
        return this.username;
    }
    setUsername(value) {
        this.username = value;
    }
    getPassword() {
        return this.password;
    }
    setPassword(value) {
        this.password = value;
    }
    getUserName() {
        return this.userName;
    }
    setUserName(value) {
        this.userName = value;
    }
    getJob() {
        return this.job;
    }
    setJob(value) {
        this.job = value;
    }
    getSex() {
        return this.sex;
    }
    setSex(value) {
        this.sex = value;
    }
    getIconUrl() {
        return this.iconUrl;
    }
    setIconUrl(value) {
        this.iconUrl = value;
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(value) {
        this.userId = value;
    }
};
__decorate([
    relaen_1.Column({
        name: 'username',
        type: 'string',
        nullable: false,
        length: 30
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    relaen_1.Column({
        name: 'password',
        type: 'string',
        nullable: false,
        length: 20
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    relaen_1.Column({
        name: 'user_name',
        type: 'string',
        nullable: false,
        length: 20
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    relaen_1.Column({
        name: 'job',
        type: 'string',
        nullable: false,
        length: 20
    }),
    __metadata("design:type", String)
], User.prototype, "job", void 0);
__decorate([
    relaen_1.Column({
        name: 'sex',
        type: 'string',
        nullable: false,
        length: 10
    }),
    __metadata("design:type", String)
], User.prototype, "sex", void 0);
__decorate([
    relaen_1.Column({
        name: 'iconUrl',
        type: 'string',
        nullable: true,
        length: 500
    }),
    __metadata("design:type", String)
], User.prototype, "iconUrl", void 0);
__decorate([
    relaen_1.Column({
        name: 'age',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    relaen_1.Id(),
    relaen_1.Column({
        name: 'user_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
User = __decorate([
    relaen_1.Entity("t_user", 'test'),
    __metadata("design:paramtypes", [Number])
], User);
exports.User = User;
//# sourceMappingURL=user.js.map
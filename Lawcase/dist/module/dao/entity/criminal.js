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
exports.Criminal = void 0;
const relaen_1 = require("relaen");
let Criminal = class Criminal extends relaen_1.BaseEntity {
    constructor(idValue) {
        super();
        this.criminalId = idValue;
    }
    getCriminalId() {
        return this.criminalId;
    }
    setCriminalId(value) {
        this.criminalId = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getIDtype() {
        return this.IDtype;
    }
    setIDtype(value) {
        this.IDtype = value;
    }
    getLawcaseName() {
        return this.lawcaseName;
    }
    setLawcaseName(value) {
        this.lawcaseName = value;
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
    getSex() {
        return this.sex;
    }
    setSex(value) {
        this.sex = value;
    }
    getArea() {
        return this.area;
    }
    setArea(value) {
        this.area = value;
    }
    getPunish() {
        return this.punish;
    }
    setPunish(value) {
        this.punish = value;
    }
    getIDcard() {
        return this.IDcard;
    }
    setIDcard(value) {
        this.IDcard = value;
    }
    getIcon() {
        return this.icon;
    }
    setIcon(value) {
        this.icon = value;
    }
};
__decorate([
    relaen_1.Id(),
    relaen_1.Column({
        name: 'criminal_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Criminal.prototype, "criminalId", void 0);
__decorate([
    relaen_1.Column({
        name: 'name',
        type: 'string',
        nullable: false,
        length: 10
    }),
    __metadata("design:type", String)
], Criminal.prototype, "name", void 0);
__decorate([
    relaen_1.Column({
        name: 'IDtype',
        type: 'string',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], Criminal.prototype, "IDtype", void 0);
__decorate([
    relaen_1.Column({
        name: 'lawcase_name',
        type: 'string',
        nullable: false,
        length: 30
    }),
    __metadata("design:type", String)
], Criminal.prototype, "lawcaseName", void 0);
__decorate([
    relaen_1.Column({
        name: 'age',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Criminal.prototype, "age", void 0);
__decorate([
    relaen_1.Column({
        name: 'sex',
        type: 'string',
        nullable: false,
        length: 5
    }),
    __metadata("design:type", String)
], Criminal.prototype, "sex", void 0);
__decorate([
    relaen_1.Column({
        name: 'area',
        type: 'string',
        nullable: false,
        length: 30
    }),
    __metadata("design:type", String)
], Criminal.prototype, "area", void 0);
__decorate([
    relaen_1.Column({
        name: 'punish',
        type: 'string',
        nullable: false,
        length: 255
    }),
    __metadata("design:type", String)
], Criminal.prototype, "punish", void 0);
__decorate([
    relaen_1.Column({
        name: 'IDcard',
        type: 'string',
        nullable: false,
        length: 30
    }),
    __metadata("design:type", String)
], Criminal.prototype, "IDcard", void 0);
__decorate([
    relaen_1.Column({
        name: 'icon',
        type: 'string',
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], Criminal.prototype, "icon", void 0);
Criminal = __decorate([
    relaen_1.Entity("t_criminal", 'test'),
    __metadata("design:paramtypes", [Number])
], Criminal);
exports.Criminal = Criminal;
//# sourceMappingURL=criminal.js.map
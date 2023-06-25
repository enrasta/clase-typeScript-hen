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
const typeorm_1 = require("typeorm");
let User = class User {
    constructor(params = {}) {
        this.nombre = params.nombre;
        this.username = params.username;
        this.password = params.password;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "ID" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'USERNAME' })
    // @Index({ unique: true })
    ,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NOMBRE' }),
    __metadata("design:type", String)
], User.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'PASSWORD' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "FECHA_REGISTRO" }),
    __metadata("design:type", Date)
], User.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "FECHA_MODIFICACION" }),
    __metadata("design:type", Date)
], User.prototype, "fechaModificacion", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;

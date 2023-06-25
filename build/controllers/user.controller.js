"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entities/User");
const Db_1 = require("../configs/Db");
const repository = Db_1.MysqlDataSource.getRepository(User_1.User);
class UserController {
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = "Hubo un error";
            try {
                const lista = yield repository.find();
                res.send(lista);
            }
            catch (error) {
                console.error(`Error ${new Date().toLocaleString()}`, error);
                res.send(error);
            }
        });
    }
    Crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = "Hubo un error";
            try {
                const users = req.body;
                const oUser = new User_1.User(users);
                yield repository.save(oUser);
                error = "Creacion exitosa";
            }
            catch (error) {
                console.error(`Error ${new Date().toLocaleString()}`, error);
            }
            res.send(error);
        });
    }
    Editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = "Hubo un error";
            const users = req.body;
            try {
                yield repository.update(Number.parseInt(req.params.id), users);
                error = "Canbio exitoso";
            }
            catch (error) {
                console.error(`Error ${new Date().toLocaleString()}`, error);
            }
            res.send(error);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = "Hubo un error";
            const { nombre, username, password } = req.body;
            yield repository.delete(Number.parseInt(req.params.id));
            try {
                let options = {
                    nombre: nombre,
                    username: username,
                    password: password,
                };
                yield repository.update(1, options);
                error = "Eliminacion correcta";
            }
            catch (error) {
                console.error(`Error ${new Date().toLocaleString()}`, error);
            }
            res.send(error);
        });
    }
}
exports.default = new UserController();

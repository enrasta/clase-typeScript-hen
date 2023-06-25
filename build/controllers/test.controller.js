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
class TestController {
    // app.get("/test", (req, res) => {
    //     var tipo = "GET";
    //     res.send("Hola Mundo! (GET)");
    // })
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const users = req.body;
            const tipo = req.query.tipo;
            const texto = req.query.texto;
            // const tipo = req.;  
            console.log("id: ", id);
            console.log("users: ", users);
            console.log("tipo: ", tipo);
            console.log("texto: ", texto);
            res.send(`Hola mundo ${req.method}`);
            const oUser = new User_1.User(users);
            //await repository.save(oUser)
            //oUser.nombre=users.nombre
            //para responder
        });
    }
}
exports.default = new TestController();

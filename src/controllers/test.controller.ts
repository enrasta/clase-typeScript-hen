import { Request, Response } from "express";
import { IUser, User } from "../entities/User";
import { MysqlDataSource } from "../configs/Db";

const repository = MysqlDataSource.getRepository(User);
class TestController {

    // app.get("/test", (req, res) => {
    //     var tipo = "GET";
    //     res.send("Hola Mundo! (GET)");
    // })
    public async test(req: Request, res: Response) {
        const id = req.params.id;
        const users: IUser = req.body;
        const tipo = req.query.tipo;
        const texto = req.query.texto;
        
        // const tipo = req.;  
        console.log("id: ", id)
        console.log("users: ", users)
        console.log("tipo: ", tipo)
        console.log("texto: ", texto)
        res.send(`Hola mundo ${req.method}`);
        const oUser = new User(users)
        //await repository.save(oUser)
        //oUser.nombre=users.nombre
        //para responder
    }
}

export default new TestController();
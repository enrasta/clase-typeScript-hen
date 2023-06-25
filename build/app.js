"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const test_controller_1 = __importDefault(require("./controllers/test.controller"));
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
//import UserController from './controllers/usuario.controller';
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    exposedHeaders: ['Authorization']
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((err, req, res, next) => {
    if (err) {
        console.error('Invalid Request data');
        res.send('Petición de request invalido');
    }
    else {
        next();
    }
});
app.get('/test', test_controller_1.default.test);
app.post('/test/:id', test_controller_1.default.test);
app.get('/user/list', user_controller_1.default.Obtener);
app.post('/user/create', user_controller_1.default.Crear);
app.put('/user/update/:id', user_controller_1.default.Editar);
app.delete('/user/delete/:id', user_controller_1.default.Eliminar);
//app.get('/api/usuario/test',UserController.test);
exports.default = app;

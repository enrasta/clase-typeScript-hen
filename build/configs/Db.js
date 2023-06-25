"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.MysqlDataSource = new typeorm_1.DataSource({
    // "type": "mysql",
    // "host": process.env.MYSQLDB_HOST,
    // "port": Number(process.env.MYSQLDB_PORT),
    // "username": process.env.MYSQLDB_USR,
    // "password": process.env.MYSQLDB_PSW,
    // "database": process.env.MYSQLDB,
    // "synchronize": true,
    // "logging": false,
    // "ssl": false,
    // "extra": {
    //     ssl: {
    //         rejectUnauthorized: true,
    //     },
    // },
    type: 'mysql',
    host: process.env.MYSQLDB_HOST,
    port: Number(process.env.MYSQLDB_PORT),
    username: process.env.MYSQLDB_USR,
    password: process.env.MYSQLDB_PSW,
    database: process.env.MYSQLDB,
    synchronize: true,
    entities: [
        "./src/entities/*.ts"
    ]
});

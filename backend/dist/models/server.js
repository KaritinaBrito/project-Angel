"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(),
            this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.connectDb();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puesto: ', this.port);
        });
    }
    middlewares() {
        //Parseo del body
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api/users', user_routes_1.default);
    }
    connectDb() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('connectado a la base de datos :)');
        });
    }
}
exports.default = Server;

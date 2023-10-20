import express, { Application } from 'express';
import routeUsers from '../routes/user.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string

    constructor(){
        this.app = express(),
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.connectDb();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puesto: ', this.port)
        })
    }

    middlewares(){
        //Parseo del body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    routes(){
        this.app.use('/api/users', routeUsers)
    }

    connectDb(){
        connection.connect((err)=>{
            if(err) throw err;
            console.log('connectado a la base de datos :)');
        })
    }
}

export default Server;
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';
import swaggerUI from 'swagger-ui-express';

import { createServer, Server } from 'http';
import { singleton } from 'tsyringe';
import { specs } from './swagger';


@singleton()
export class App {
    app: express.Application;
    server: Server;

    constructor() {
        this.app = express();
        this.server = createServer(this.app);

        this.use();
        this.routes();
    }

    private routes(): void {
        this.app.use('/api', router());
    }

    private use(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        // this.app.use(
        //     '/swagger',
        //     swaggerUI.serve,
        //     swaggerUI.setup(specs)
        // );
    }
}

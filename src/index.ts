import express from 'express'
import * as bodyParser from 'body-parser'
import router from './router'

const app = express();
const PORT:number = 3000;
const ROOT:string = "/api"

export default {
    run() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(ROOT, router);
        app.listen(PORT, () => {
            process.stdout.write(`server started listening on port ${PORT}\n`);
        });
    }
}
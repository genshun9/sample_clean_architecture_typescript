import "reflect-metadata";
import express from 'express'
import router from './router'
import {initializeApplication} from "./container";

// DIコンテナの初期化
initializeApplication();

const app = express();
const PORT:number = 3000;
const ROOT:string = "/api"

// req.bodyを受け取るために設定。body-parserは現代では不要
app.use(express.urlencoded({ extended: true }));
// jsonを返却するために設定
app.use(express.json());
app.use(ROOT, router);
app.listen(PORT, () => {
    process.stdout.write(`server started listening on port ${PORT}\n`);
});
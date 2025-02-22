import express, { Request, Response } from "express";
import moment from 'moment';
import {UserController} from "./modules/user/adaptor/controller/UserController";

const router = express.Router();

router.use((req: Request, res: Response, next:Function) => {
    process.stdout.write(`[${moment().format("LTS")}]
       url: ${req.method} ${req.url}
       header: ${JSON.stringify(req.headers)}
       body: ${JSON.stringify(req.body)}
       \n`);
    next();
});

// router.get("/users", (_: Request, res: Response) => UserController.getAll(res));
// router.post("/post/create", (req: Request, res: Response) => PostController.create(res));

export default router;
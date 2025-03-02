import express, { Request, Response } from "express";
import moment from 'moment';
import {UserController} from "./modules/user/adaptor/controller/UserController";
import {HashTagController} from "./modules/hashtag/adaptor/controller/HashTagController";
import {PostController} from "./modules/post/adaptor/controller/PostController";

const router = express.Router();

router.use((req: Request, res: Response, next:() => {}) => {
    process.stdout.write(`[${moment().format("LTS")}]
       url: ${req.method} ${req.url}
       header: ${JSON.stringify(req.headers)}
       body: ${JSON.stringify(req.body)}
       \n`);
    next();
});

// User
router.post("/user/create", (req: Request, res: Response) => UserController.createUser(req, res));
router.get("/user/:id", (req: Request, res: Response) => UserController.getUser(req, res));
router.get("/users", (req: Request, res: Response) => UserController.getAllUsers(req, res));
router.put("/user/name",(req: Request, res: Response) => UserController.updateName(req, res));

// HashTag
router.post("/hashtag/create", (req: Request, res: Response) => HashTagController.createHashTag(req, res));
router.get("/hashtag/:id", (req: Request, res: Response) => HashTagController.getHashTag(req, res));
router.get("/hashtags", (req: Request, res: Response) => HashTagController.getAllHashTags(req, res));

// Post
router.post("/post/create", (req: Request, res: Response) => PostController.createPost(req, res));
router.get("/post/:post_id", (req: Request, res: Response) => PostController.getPost(req, res));
router.get("/post/user/:user_id", (req: Request, res: Response) => PostController.getUserPosts(req, res));


export default router;
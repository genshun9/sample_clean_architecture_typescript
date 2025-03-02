import {Request, Response} from "express";
import {CreatePostUseCase} from "../../application/usecase/CreatePostUseCase";
import {PostPresenter} from "../presenter/PostPresenter";
import {PostGateway} from "../infrastructure/gateway/cache/PostGateway";
import {PostFactory} from "../../domain/factory/PostFactory";
import {GetPostUseCase} from "../../application/usecase/GetPostUseCase";
import {GetUserPostsUseCase} from "../../application/usecase/GetUserPostsUseCase";
import {CreatePostRequest, GetPostRequest, GetUserPostsRequest} from "../../application/dto";

export const PostController = {
    createPost(req:Request, res:Response):void {
        const message = req.body.message;
        const userId = req.body.userId;
        if (!message || typeof message !== 'string' || !userId || typeof userId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:CreatePostRequest = ({message, userId: userId});
        const usecase = new CreatePostUseCase(new PostPresenter(res), new PostGateway(), new PostFactory());
        usecase.execute(request);
    },

    getPost(req:Request, res:Response):void {
        const postId = req.query.post_id;
        if (!postId || typeof postId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetPostRequest = ({id: postId});
        const usecase = new GetPostUseCase(new PostPresenter(res), new PostGateway());
        usecase.execute(request);
    },

    getUserPosts(req:Request, res:Response):void {
        const userId = req.query.userId;
        if (!userId || typeof userId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetUserPostsRequest = ({userId});
        const usecase = new GetUserPostsUseCase(new PostPresenter(res), new PostGateway());
        usecase.execute(request);
    }
}
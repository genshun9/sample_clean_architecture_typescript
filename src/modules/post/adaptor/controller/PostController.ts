import {Request, Response} from "express";
import {CreatePostUseCase} from "../../application/usecase/CreatePostUseCase";
import {PostPresenter} from "../presenter/PostPresenter";
import {PostGateway} from "../infrastructure/gateway/cache/PostGateway";
import {PostFactory} from "../../domain/factory/PostFactory";
import {GetPostUseCase} from "../../application/usecase/GetPostUseCase";
import {GetUserPostsUseCase} from "../../application/usecase/GetUserPostsUseCase";

export const PostController = {
    createPost(req:Request, res:Response):void {
        const request = {
            message: req.body.message,
            userId: req.body.userId
        }
        const usecase = new CreatePostUseCase(new PostPresenter(res), new PostGateway(), new PostFactory());
        usecase.execute(request);
    },

    getPost(req:Request, res:Response):void {
        const request = {
            postId: req.body.postId
        };
        const usecase = new GetPostUseCase(new PostPresenter(res), new PostGateway());
        usecase.execute(request);
    },

    getUserPosts(req:Request, res:Response):void {
        const request = {
            userId: req.body.userId
        };
        const usecase = new GetUserPostsUseCase(new PostPresenter(res), new PostGateway());
        usecase.execute(request);
    }
}
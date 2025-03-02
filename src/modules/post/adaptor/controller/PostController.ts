import {Request, Response} from "express";
import {CreatePostUseCase} from "../../application/usecase/CreatePostUseCase";
import {PostPresenter} from "../presenter/PostPresenter";
import {PostFactory} from "../../domain/factory/PostFactory";
import {GetPostUseCase} from "../../application/usecase/GetPostUseCase";
import {GetUserPostsUseCase} from "../../application/usecase/GetUserPostsUseCase";
import {
    AddFavoriteRequest,
    CreatePostRequest,
    GetFavoritePostsRequest,
    GetPostRequest,
    GetUserPostsRequest, RemoveFavoriteRequest
} from "../../application/dto";
import {PostAggregateGateway} from "../infrastructure/gateway/cache/PostAggerageGateway";
import {GetFavoritePostsUseCase} from "../../application/usecase/GetFavoritePostUseCase";
import {AddFavoriteUseCase} from "../../application/usecase/AddFavoriteUseCase";
import {RemoveFavoriteUseCase} from "../../application/usecase/RemoveFavoriteUseCase";

export const PostController = {
    createPost(req:Request, res:Response):void {
        const message = req.body.message;
        const userId = req.body.userId;
        if (!message || typeof message !== 'string' || !userId || typeof userId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:CreatePostRequest = ({message, userId: userId});
        const usecase = new CreatePostUseCase(new PostPresenter(res), new PostAggregateGateway(), new PostFactory());
        usecase.execute(request);
    },

    getPost(req:Request, res:Response):void {
        const postId = req.query.post_id;
        if (!postId || typeof postId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetPostRequest = ({id: postId});
        const usecase = new GetPostUseCase(new PostPresenter(res), new PostAggregateGateway());
        usecase.execute(request);
    },

    getUserPosts(req:Request, res:Response):void {
        const userId = req.query.userId;
        if (!userId || typeof userId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetUserPostsRequest = ({userId});
        const usecase = new GetUserPostsUseCase(new PostPresenter(res), new PostAggregateGateway());
        usecase.execute(request);
    },

    getFavoritePosts(req:Request, res:Response):void {
        const userId = req.query.userId;
        if (!userId || typeof userId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetFavoritePostsRequest = ({userId});
        const usecase = new GetFavoritePostsUseCase(new PostPresenter(res), new PostAggregateGateway());
        usecase.execute(request);
    },

    addFavorite(req:Request, res:Response):void {
        const userId = req.query.userId;
        const postId = req.query.postId;
        if (!userId || typeof userId !== 'string' || !postId || typeof postId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:AddFavoriteRequest = ({userId, postId});
        const usecase = new AddFavoriteUseCase(new PostPresenter(res), new PostAggregateGateway());
        usecase.execute(request);
    },

    removeFavorite(req:Request, res:Response):void {
        const userId = req.query.userId;
        const postId = req.query.postId;
        if (!userId || typeof userId !== 'string' || !postId || typeof postId !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:RemoveFavoriteRequest = ({userId, postId});
        const usecase = new RemoveFavoriteUseCase(new PostPresenter(res), new PostAggregateGateway());
        usecase.execute(request);
    }
}
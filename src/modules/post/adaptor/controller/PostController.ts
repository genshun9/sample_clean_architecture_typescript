import {Request, Response} from "express";
import {CreatePostUseCase} from "../../application/usecase/CreatePostUseCase";
import {PostPresenter} from "../presenter/PostPresenter";
import {GetPostUseCase} from "../../application/usecase/GetPostUseCase";
import {GetUserPostsUseCase} from "../../application/usecase/GetUserPostsUseCase";
import {
    AddFavoriteRequest,
    CreatePostRequest,
    GetFavoritePostsRequest,
    GetPostRequest,
    GetUserPostsRequest,
    RemoveFavoriteRequest
} from "../../application/dto";
import {GetFavoritePostsUseCase} from "../../application/usecase/GetFavoritePostUseCase";
import {AddFavoriteUseCase} from "../../application/usecase/AddFavoriteUseCase";
import {RemoveFavoriteUseCase} from "../../application/usecase/RemoveFavoriteUseCase";
import {container} from "tsyringe";

export const PostController = {
    createPost(req:Request, res:Response):void {
        const message = req.body.message;
        const userId = req.body.userId;
        if (!message || typeof message !== "string" || !userId || typeof userId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:CreatePostRequest = ({message, userId: userId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(CreatePostUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getPost(req:Request, res:Response):void {
        const postId = req.params.post_id;
        if (!postId || typeof postId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetPostRequest = ({id: postId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetPostUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getUserPosts(req:Request, res:Response):void {
        const userId = req.params.user_id;
        if (!userId || typeof userId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetUserPostsRequest = ({userId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetUserPostsUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getFavoritePosts(req:Request, res:Response):void {
        const userId = req.params.user_id;
        if (!userId || typeof userId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetFavoritePostsRequest = ({userId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetFavoritePostsUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    addFavorite(req:Request, res:Response):void {
        const userId = req.body.userId;
        const postId = req.body.postId;
        if (!userId || typeof userId !== "string" || !postId || typeof postId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:AddFavoriteRequest = ({userId, postId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(AddFavoriteUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    removeFavorite(req:Request, res:Response):void {
        const userId = req.body.userId;
        const postId = req.body.postId;
        if (!userId || typeof userId !== "string" || !postId || typeof postId !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:RemoveFavoriteRequest = ({userId, postId});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(RemoveFavoriteUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new PostPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    }
}
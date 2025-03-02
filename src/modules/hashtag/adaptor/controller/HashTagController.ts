import {Request, Response} from "express";
import {CreateHashTagUseCase} from "../../application/usecase/CreateHashTagUseCase";
import {HashTagPresenter} from "../presenter/HashTagPresenter";
import {GetHashTagUseCase} from "../../application/usecase/GetHashTagUseCase";
import {GetAllHashTagsUseCase} from "../../application/usecase/GetAllHashTagsUseCase";
import {CreateHashTagRequest, GetHashTagRequest} from "../../application/dto";
import {container} from "tsyringe";

export const HashTagController = {
    createHashTag(req:Request, res:Response):void {
        const text = req.body.text;
        if (!text || typeof text !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:CreateHashTagRequest = ({text});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(CreateHashTagUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new HashTagPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getHashTag(req:Request, res:Response):void {
        const postID = req.query.post_id;
        if (!postID || typeof postID !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetHashTagRequest = ({id: postID});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetHashTagUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new HashTagPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getAllHashTags(req:Request, res:Response):void {
        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetAllHashTagsUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new HashTagPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute({});
    }
}
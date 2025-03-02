import {Request, Response} from "express";
import {CreateHashTagUseCase} from "../../application/usecase/CreateHashTagUseCase";
import {HashTagPresenter} from "../presenter/HashTagPresenter";
import {HashTagGateway} from "../infrastructure/gateway/cache/HashTagGateway";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {GetHashTagUseCase} from "../../application/usecase/GetHashTagUseCase";
import {GetAllHashTagsUseCase} from "../../application/usecase/GetAllHashTagsUseCase";
import {CreateHashTagRequest, GetHashTagRequest} from "../../application/dto";

export const HashTagController = {
    createHashTag(req:Request, res:Response):void {
        const text = req.body.text;
        if (!text || typeof text !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:CreateHashTagRequest = ({text});
        const usecase = new CreateHashTagUseCase(new HashTagPresenter(res), new HashTagGateway(), new HashTagFactory());
        usecase.execute(request);
    },

    getHashTag(req:Request, res:Response):void {
        const postID = req.query.post_id;
        if (!postID || typeof postID !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:GetHashTagRequest = ({id: postID});
        const usecase = new GetHashTagUseCase(new HashTagPresenter(res), new HashTagGateway());
        usecase.execute(request);
    },

    getAllHashTags(req:Request, res:Response):void {
        const usecase = new GetAllHashTagsUseCase(new HashTagPresenter(res), new HashTagGateway());
        usecase.execute({});
    }
}
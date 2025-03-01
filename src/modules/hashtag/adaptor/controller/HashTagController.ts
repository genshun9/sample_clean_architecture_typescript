import {Request, Response} from "express";
import {CreateHashTagUseCase} from "../../application/usecase/CreateHashTagUseCase";
import {HashTagPresenter} from "../presenter/HashTagPresenter";
import {HashTagGateway} from "../infrastructure/gateway/cache/HashTagGateway";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {GetHashTagUseCase} from "../../application/usecase/GetHashTagUseCase";
import {GetAllHashTagsUseCase} from "../../application/usecase/GetAllHashTagsUseCase";

export const HashTagController = {
    createHashTag(req:Request, res:Response):void {
        const request = {
            text: req.body.text
        }
        const usecase = new CreateHashTagUseCase(new HashTagPresenter(res), new HashTagGateway(), new HashTagFactory());
        usecase.execute(request);
    },

    getHashTag(req:Request, res:Response):void {
        const request = {
            id: req.body.id
        };
        const usecase = new GetHashTagUseCase(new HashTagPresenter(res), new HashTagGateway());
        usecase.execute(request);
    },

    getAllHashTags(req:Request, res:Response):void {
        const usecase = new GetAllHashTagsUseCase(new HashTagPresenter(res), new HashTagGateway());
        usecase.execute({});
    }
}
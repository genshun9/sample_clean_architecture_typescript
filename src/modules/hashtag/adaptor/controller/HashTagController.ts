import { Request, Response } from "express";
import {CreateHashTagRequest, ICreateHashTagInputPort} from "../../application/port/HashTagInputPort";
import {CreateHashTagUseCase} from "../../application/usecase/CreateHashTagUseCase";

export class HashTagController {
    constructor(
        private readonly inputPort: ICreateHashTagInputPort,
        private createHashTagUseCase: CreateHashTagUseCase,
        // private getHashUseCase: GetHashUseCase,
    ) {}

    async createHashTag(req: Request, res: Response): Promise<void> {
        try {
            const request: CreateHashTagRequest = {
                text: req.body.text,
            };
            await this.inputPort.execute(request);
        } catch (error) {
            // エラーハンドリング
        }
    }
}
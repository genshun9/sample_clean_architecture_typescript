import { Request, Response } from "express";
import {CreateUserUseCase} from "../../application/usecase/CreateUserUseCase";
import {CreateUserRequest, ICreateUserInputPort} from "../../application/port/CreateUserInputPort";

export class UserController {
    constructor(
        private readonly inputPort: ICreateUserInputPort,
        private createUserUseCase: CreateUserUseCase,
        // private getUserUseCase: GetUserUseCase,
        // private listUserUseCase: ListUserUseCase
    ) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const request: CreateUserRequest = {
                name: req.body.name,
                email: req.body.email
            };
            await this.inputPort.execute(request);
        } catch (error) {
            // エラーハンドリング
        }
    }
}
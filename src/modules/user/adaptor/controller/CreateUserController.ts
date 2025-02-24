import { Request, Response } from "express";
import { ICreateUserInputPort} from "../../application/port/UserInputPort";
import {Controller} from "../../../../shared/adaptor/Controller";
import {Success, UseCaseResult} from "../../../../shared/application/UseCaseResult";
import {CreateUserRequest, CreateUserResponse} from "../../application/dto";
import {UserPresenter} from "../presenter/UserPresenter";

export class CreateUserController extends Controller<CreateUserRequest> {
    constructor(
        private readonly useCase: ICreateUserInputPort,
        private readonly presenter: UserPresenter,
        // private readonly gateway: any
    ) {
        super(useCase, presenter);
    }

    validateRequest(req: CreateUserRequest): boolean {
        return true
    }

    // validateRequest(req: Request): CreateUserRequest {
    //     const request = {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    //     return request
    // }

    // protected handleFailure(error: Error): any {}
    //
    // protected handleSuccess(result: Success<CreateUserResponse>): any {}

    // async execute(req: Request, res: Response): Promise<void> {
    //     try {
    //         const request = this.validateRequest(req);
    //         const result = await this.useCase.execute(request);
    //         if (UseCaseResult.isSuccess(result)) {
    //             return this.handleSuccess(result);
    //         } else {
    //             return this.handleFailure(result.error);
    //         }
    //     } catch (error) {
    //         return this.handleFailure(error as Error);
    //     }
    // }
}
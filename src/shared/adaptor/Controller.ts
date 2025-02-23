import {Request, Response} from "express";
import {IInputPort} from "../application/InputPort";
import {IOutputPort} from "../application/OutputPort";

export abstract class Controller<RequestDto> {
    constructor(
        protected readonly useCase: IInputPort<RequestDto>,
        protected readonly presenter: IOutputPort
    ) {}

    protected abstract validateRequest(req: RequestDto): boolean;

    // controllerとusecaseが1対1であるなら、基底クラスに実装可能なはず
    run(res: Response, req: RequestDto): void {
        const validationResult = this.validateRequest(req);
        switch(validationResult) {
            case true:
                this.useCase.execute(req);
                break;
            case false:
                this.presenter.failure(new Error("validation error"));
            default:
                break;
        }
    }

    // protected abstract validateRequest(req: Request): boolean;
    // protected abstract handleSuccess(result: Success<Response>): any;
    // protected abstract handleFailure(error: Error): any; // SuccessとFailure型を返したほうがキレイな気がする

    // async execute(req: Request): void {
    //     try {
    //         const request = this.validateRequest(req);
    //         const result = await this.useCase.execute(request);
    //         if (UseCaseResult.isSuccess(result)) {
    //             return this.handleSuccess(result);
    //         } else {
    //             return this.handleFailure(result.error);
    //         }
    //     } catch (error) {
    //         return this.handleFailure(error);
    //     }
    // }
}
import {Failure, Success, UseCaseResult} from "../application/UseCaseResult";
import {UseCase} from "../application/UseCase";

export abstract class Controller<Request, Response> {
    constructor(
        protected readonly useCase: UseCase<Request, Response>
    ) {}

    protected abstract validateRequest(req: any): Request;
    protected abstract handleSuccess(result: Success<Response>): any;
    protected abstract handleFailure(error: Error): any; // SuccessとFailure型を返したほうがキレイな気がする

    async execute(req: any): Promise<any> {
        try {
            const request = this.validateRequest(req);
            const result = await this.useCase.execute(request);
            if (UseCaseResult.isSuccess(result)) {
                return this.handleSuccess(result);
            } else {
                return this.handleFailure(result.error);
            }
        } catch (error) {
            return this.handleFailure(error as Error);
        }
    }
}
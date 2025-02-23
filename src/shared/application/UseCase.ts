import {IOutputPort} from "./OutputPort";
import {Result, UseCaseResult} from "./UseCaseResult";
import {IInputPort} from "./InputPort";

export abstract class UseCase<Request, Response> implements IInputPort<Request, Response>{
    constructor(
        protected readonly outputPort: IOutputPort
    ) {}

    abstract execute(request: Request): Promise<Result<Response>>;

    // protected handleSuccess(value: Response): Result<Response> {
    //     this.outputPort.success(value);
    //     return UseCaseResult.success(value);
    // }

    protected handleError(error: Error): Result<Response> {
        this.outputPort.failure(error);
        return UseCaseResult.failure(error);
    }
}
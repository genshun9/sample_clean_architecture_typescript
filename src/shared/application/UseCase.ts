import {IOutputPort} from "./OutputPort";
import {IInputPort} from "./InputPort";

export abstract class UseCase<Request> implements IInputPort<Request>{
    constructor(
        protected readonly outputPort: IOutputPort
    ) {}

    abstract execute(request: Request): Promise<void>;

    // protected handleSuccess(value: Response): Result<Response> {
    //     this.outputPort.success(value);
    //     return UseCaseResult.success(value);
    // }
    //
    // protected handleError(error: Error): Result<Response> {
    //     this.outputPort.failure(error);
    //     return UseCaseResult.failure(error);
    // }
}
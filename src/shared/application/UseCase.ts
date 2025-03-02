import {OutputPort} from "./OutputPort";
import {InputPort} from "./InputPort";

export abstract class UseCase<RequestDto> implements InputPort<RequestDto>{
    protected constructor(
        protected readonly outputPort: OutputPort
    ) {}

    abstract execute(request: RequestDto): Promise<void>;

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
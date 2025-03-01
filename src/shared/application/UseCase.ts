import {IOutputPort} from "./OutputPort";
import {IInputPort} from "./InputPort";

export abstract class UseCase<RequestDto> implements IInputPort<RequestDto>{
    protected constructor(
        protected readonly outputPort: IOutputPort
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
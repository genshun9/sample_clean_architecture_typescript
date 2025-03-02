import {OutputPort} from "./OutputPort";
import {InputPort} from "./InputPort";

export abstract class UseCase<RequestDto> implements InputPort<RequestDto>{
    protected outputPort?: OutputPort;
    // Presenterがexpressに依存しているためDI注入ができず、constructorで作らないようにする
    // protected constructor(
    //     protected readonly outputPort: OutputPort
    // ) {}

    // outputPortをsetterメソッドで作成する
    setOutputPort(outputPort: OutputPort): void {
        this.outputPort = outputPort;
    }

    // outputPortが設定されていることを確認
    validateOutputPort(): void {
        if (!this.outputPort) {
            throw new Error("Output port not set");
        }
    }

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
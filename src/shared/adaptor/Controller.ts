import {InputPort} from "../application/InputPort";
import {OutputPort} from "../application/OutputPort";

// Controllerの基底クラス使っていない
export abstract class Controller<RequestDto> {
    protected constructor(
        protected readonly useCase: InputPort<RequestDto>,
        protected readonly presenter: OutputPort
    ) {}

    protected abstract validateRequest(req: RequestDto): boolean;

    // controllerとusecaseが1対1なら、基底クラスに共通処理として実装できそう。
    // 実際はそんなことはないのでやめた、雰囲気コードだけ残す。
    // run(res: Response, req: Request): void {
    //     // request自体のバリデーション
    //     const validationResult = this.validateRequest(req);
    //     switch(validationResult) {
    //         case true:
    //             // usecaseの実装し内部でpresenterを実行しresponse返す
    //             this.useCase.execute(req);
    //             break;
    //         case false:
    //             // usecase行く前にpresenterのfailureを実行するが、微妙かも
    //             this.presenter.failure(new Error("validation error"));
    //         default:
    //             break;
    //     }
    // }
}
import {Response} from "express";
import {IOutputPort} from "../application/OutputPort";
import {Result, UseCaseResult} from "../application/UseCaseResult";

export abstract class Presenter implements IOutputPort {
    // Presenterがフレームワーク(express)に依存する形になるが、一番外の層なので良しとする
    constructor(protected response:Response) {}

    // presenterとusecaseが1対1なら基底クラスに共通処理として実装できそうだが、できなさそうなので雰囲気だけ残す
    // protected abstract present(data: any): void;
    // protected handle<T>(result: Result<T>): void {
    //     if (UseCaseResult.isSuccess(result<T>)) {
    //         this.present(result.value);
    //     } else {
    //         this.failure(result.error);
    //     }
    // }

    failure(err: Error): void {
        this.response.status(500);
        this.response.send(err);
    }
}
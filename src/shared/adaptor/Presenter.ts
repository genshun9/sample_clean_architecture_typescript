import {Response} from "express";
import {IOutputPort} from "../application/OutputPort";

export abstract class Presenter implements IOutputPort {
    // Presenterがフレームワーク(express)に依存する形になるが、一番外の層なので良しとする
    constructor(protected response:Response) {}

    failure(err: Error): void {
        this.response.status(500);
        this.response.send(err);
    }
}
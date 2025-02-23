import {Response} from "express";
import {IOutputPort} from "../application/OutputPort";

export abstract class Presenter implements IOutputPort {
    constructor(protected response:Response) {}
    // TODO: DTOにしたい
    protected viewModel: any;

    // abstract success(response: T): void;

    failure(error: Error): void {
        this.response.status(500);
    }

    getViewModel() {
        return this.viewModel;
    }
}
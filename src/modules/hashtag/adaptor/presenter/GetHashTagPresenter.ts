import {CreateHashTagResponse, ICreateHashTagOutputPort} from "../../application/port/HashTagOutputPort";

export class CreateHashTagPresenter implements ICreateHashTagOutputPort {
    private viewModel: any

    present(response: CreateHashTagResponse): void {
        // dtoで変換する
        this.viewModel = {};
    }

}
import {CreateUserResponse, ICreateUserOutputPort} from "../../application/port/CreateUserOutputPort";

export class CreateUserPresenter implements ICreateUserOutputPort {
    private viewModel: any

    present(response: CreateUserResponse): void {
        // dtoで変換する
        this.viewModel = {};
    }

}
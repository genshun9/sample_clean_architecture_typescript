import {IUserOutputPort} from "../../application/port/UserOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";
import {CreateUserResponse, GetAllUsersResponse, GetUserResponse, UpdateUserNameResponse} from "../../application/dto";

export class UserPresenter extends Presenter implements IUserOutputPort {
    successCreateUser(user: CreateUserResponse): void {
        this.response.send(user);
    }
    successGetUser(user: GetUserResponse): void {
        this.response.send(user);
    }

    successGetAllUsers(users: GetAllUsersResponse): void {
        this.response.send(users);
    }
    successUpdateUserName(user: UpdateUserNameResponse): void {
        this.response.send(user);
    }
}
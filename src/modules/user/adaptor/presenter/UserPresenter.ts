import {IUserOutputPort} from "../../application/port/UserOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";

export class UserPresenter extends Presenter implements IUserOutputPort {
    successCreateUser(): void {
        this.response.send();
    }
    successGetUser(user: any): void {
        this.response.send(user);
    }
    successGetAllUsers(users: any): void {
        this.response.send(users);
    }
}
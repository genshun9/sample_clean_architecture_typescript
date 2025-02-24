import {IOutputPort} from "../../../../shared/application/OutputPort";
import {GetAllUsersRequest, GetUserResponse} from "../dto";

export interface IUserOutputPort extends IOutputPort {
    // TODO: DTOにする
    successCreateUser(): void;
    successGetUser(user: GetUserResponse): void;
    successGetAllUsers(users: GetAllUsersRequest): void;
}
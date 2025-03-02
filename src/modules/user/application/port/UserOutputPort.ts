import {OutputPort} from "../../../../shared/application/OutputPort";
import {
    CreateUserResponse,
    GetAllUsersResponse,
    GetUserResponse,
    UpdateUserNameResponse
} from "../dto";

export interface UserOutputPort extends OutputPort {
    successCreateUser(user: CreateUserResponse): void;
    successGetUser(user: GetUserResponse): void;
    successGetAllUsers(users: GetAllUsersResponse): void;
    successUpdateUserName(user: UpdateUserNameResponse): void;
}
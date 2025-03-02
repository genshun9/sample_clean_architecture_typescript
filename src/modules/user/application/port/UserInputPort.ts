import {InputPort} from "../../../../shared/application/InputPort";
import {
    CreateUserRequest,
    GetAllUsersRequest,
    GetUserRequest,
    UpdateUserNameRequest,
} from "../dto";

export interface CreateUserInputPort extends InputPort<CreateUserRequest> {}
export interface GetUserInputPort extends InputPort<GetUserRequest> {}
export interface GetAllUsersInputPort extends InputPort<GetAllUsersRequest> {}
export interface UpdateUserNameInputPort extends InputPort<UpdateUserNameRequest> {}

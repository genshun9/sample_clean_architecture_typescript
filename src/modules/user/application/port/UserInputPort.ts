import {IInputPort} from "../../../../shared/application/InputPort";
import {
    CreateUserRequest,
    GetAllUsersRequest,
    GetUserRequest,
    UpdateUserNameRequest,
} from "../dto";

export interface ICreateUserInputPort extends IInputPort<CreateUserRequest> {}
export interface IGetUserInputPort extends IInputPort<GetUserRequest> {}
export interface IGetAllUsersInputPort extends IInputPort<GetAllUsersRequest> {}
export interface IUpdateUserNameInputPort extends IInputPort<UpdateUserNameRequest> {}

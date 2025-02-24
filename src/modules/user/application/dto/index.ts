import {User} from "../../domain/entity/User";

export interface CreateUserRequest {
    name: string,
    email: string
}
export interface CreateUserResponse {
    user: User;
}

export interface GetUserRequest {
    userID: string,
}
export interface GetUserResponse {
    user: User;
}

export type GetAllUsersRequest = void;
export interface GetAllUsersResponse {
    users: User[];
}
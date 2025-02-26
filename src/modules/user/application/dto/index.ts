import {User} from "../../domain/entity/User";
import {UserID} from "../../domain/valueObject/UserID";

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

export const convertGetUserRequest2Dto = (req:GetUserRequest) => UserID.create(req.userID);
export const convertUserID2GetUserResponse = (user:User) => ({user}) as GetUserResponse;
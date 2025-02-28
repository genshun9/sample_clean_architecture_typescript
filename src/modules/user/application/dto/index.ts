import {User} from "../../domain/entity/User";
import {UserID} from "../../domain/valueObject/UserID";
import {UserName} from "../../domain/valueObject/UserName";

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

export interface UpdateUserNameRequest {
    userID: string,
    name: string
}
export interface UpdateUserNameResponse {
    user: User;
}

export const convertGetUserRequest2Dto = (req:GetUserRequest) => UserID.create(req.userID);
export const convertUser2GetUserResponse = (user:User) => ({user}) as GetUserResponse;
export const convertUpdateUserNameRequest2Dto = (req: UpdateUserNameRequest) => ({
    userID: UserID.create(req.userID),
    name: new UserName(req.name)
})
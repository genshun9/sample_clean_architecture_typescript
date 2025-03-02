import {Post} from "../../domain/entity/Post";
import {PostID} from "../../domain/valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";

export interface CreatePostRequest {
    message: string,
    userId: string
}
export interface CreatePostResponse {
    post: Post;
}

export interface GetPostRequest {
    id: string,
}
export interface GetPostResponse {
    post: Post;
}

export interface GetUserPostsRequest {
    userId: string;
}

export interface GetUserPostsResponse {
    posts: Post[];
}

export type GetAllPostsRequest = void;
export interface GetAllPostsResponse {
    posts: Post[];
}

export const convertGetPostRequest2Dto = (req:GetPostRequest) => PostID.create(req.id);
export const convertPost2GetPostResponse = (post:Post) => ({post}) as GetPostResponse;
export const convertGetUserPostsRequest2Dto = (req:GetUserPostsRequest) => UserID.create(req.userId);
export const convertPosts2GetUserPostsResponse = (posts: Post[]) => ({posts}) as GetUserPostsResponse;
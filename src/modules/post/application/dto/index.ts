import {Post} from "../../domain/entity/Post";
import {PostID} from "../../domain/valueObject/PostID";

export interface CreatePostRequest {
    message: string,
    userId: string
}
export interface CreatePostResponse {
    post: Post;
}

export interface GetPostRequest {
    postId: string,
}
export interface GetPostResponse {
    post: Post;
}

export type GetAllPostsRequest = void;
export interface GetAllPostsResponse {
    Posts: Post[];
}

export const convertGetPostRequest2Dto = (req:GetPostRequest) => PostID.create(req.postId);
export const convertPost2GetPostResponse = (post:Post) => ({post}) as GetPostResponse;
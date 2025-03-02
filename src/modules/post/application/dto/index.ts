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

export interface GetFavoritePostsRequest {
    userId: string;
}

export interface GetFavoritePostsResponse {
    posts: Post[];
}

export interface AddFavoriteRequest {
    postId: string;
    userId: string;
}

export interface AddFavoriteResponse {
    post: Post
}

export interface RemoveFavoriteRequest {
    postId: string;
    userId: string;
}

export interface RemoveFavoriteResponse {
    post: Post
}

export interface GetAllPostsRequest {}
export interface GetAllPostsResponse {
    posts: Post[];
}

export const convertGetPostRequest2Dto = (req:GetPostRequest) => PostID.create(req.id);
export const convertPost2GetPostResponse = (post:Post) => ({post}) as GetPostResponse;
export const convertGetUserPostsRequest2Dto = (req:GetUserPostsRequest) => UserID.create(req.userId);
export const convertPosts2GetUserPostsResponse = (posts: Post[]) => ({posts}) as GetUserPostsResponse;
export const convertGetFavoritePostsRequest2Dto = (req:GetFavoritePostsRequest) => UserID.create(req.userId);
export const convertPosts2GetFavoritePostsResponse = (posts: Post[]) => ({posts}) as GetFavoritePostsResponse;

export const convertAddFavoriteRequest2Dto = (req:AddFavoriteRequest) => ({
    postID: PostID.create(req.postId),
    userID: UserID.create(req.userId)
});
export const convertPost2AddFavoritePostResponse = (post: Post) => ({post}) as AddFavoriteResponse;
export const convertRemoveFavoriteRequest2Dto = (req:RemoveFavoriteRequest) => ({
    postID: PostID.create(req.postId),
    userID: UserID.create(req.userId)
});
export const convertPost2RemoveFavoritePostResponse = (post: Post) => ({post}) as RemoveFavoriteResponse;

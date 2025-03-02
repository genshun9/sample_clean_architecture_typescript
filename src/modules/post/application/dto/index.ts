import {Post} from "../../domain/entity/Post";
import {PostID} from "../../domain/valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostAggregate} from "../../domain/aggregate/PostAggregate";

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
    postAggregate: PostAggregate
}

export interface RemoveFavoriteRequest {
    postId: string;
    userId: string;
}

export interface RemoveFavoriteResponse {
    postAggregate: PostAggregate
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
export const convertPost2AddFavoritePostResponse = (postAggregate: PostAggregate) => ({postAggregate}) as AddFavoriteResponse;
export const convertRemoveFavoriteRequest2Dto = (req:RemoveFavoriteRequest) => ({
    postID: PostID.create(req.postId),
    userID: UserID.create(req.userId)
});
export const convertPost2RemoveFavoritePostResponse = (postAggregate: PostAggregate) => ({postAggregate}) as RemoveFavoriteResponse;

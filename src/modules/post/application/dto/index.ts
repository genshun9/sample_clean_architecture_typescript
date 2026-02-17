import {PostID} from "../../domain/valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostAggregate} from "../../domain/aggregate/PostAggregate";

export interface CreatePostRequest {
    message: string,
    userId: string
}
export interface CreatePostResponse {
    postAggregate: PostAggregate;
}

export interface GetPostRequest {
    id: string,
}
export interface GetPostResponse {
    postAggregate: PostAggregate;
}

export interface GetUserPostsRequest {
    userId: string;
}

export interface GetUserPostsResponse {
    postAggregates: PostAggregate[];
}

export interface GetFavoritePostsRequest {
    userId: string;
}

export interface GetFavoritePostsResponse {
    postAggregates: PostAggregate[];
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
    postAggregates: PostAggregate[];
}

export const convertGetPostRequest2Dto = (req:GetPostRequest) => PostID.create(req.id);
export const convertPostAggregate2GetPostResponse = (postAggregate:PostAggregate) => ({postAggregate}) as GetPostResponse;
export const convertGetUserPostsRequest2Dto = (req:GetUserPostsRequest) => UserID.create(req.userId);
export const convertPostAggregates2GetUserPostsResponse = (postAggregates: PostAggregate[]) => ({postAggregates}) as GetUserPostsResponse;
export const convertGetFavoritePostsRequest2Dto = (req:GetFavoritePostsRequest) => UserID.create(req.userId);
export const convertPostAggregates2GetFavoritePostsResponse = (postAggregates: PostAggregate[]) => ({postAggregates}) as GetFavoritePostsResponse;

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

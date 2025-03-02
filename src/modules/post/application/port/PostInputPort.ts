import {InputPort} from "../../../../shared/application/InputPort";
import {
    AddFavoriteRequest,
    CreatePostRequest,
    GetAllPostsRequest,
    GetFavoritePostsRequest,
    GetPostRequest,
    GetUserPostsRequest,
    RemoveFavoriteRequest
} from "../dto";

export interface CreatePostInputPort extends InputPort<CreatePostRequest> {}
export interface GetPostInputPort extends InputPort<GetPostRequest> {}
export interface GetUserPostsInputPort extends InputPort<GetUserPostsRequest> {}
export interface GetFavoritePostsInputPort extends InputPort<GetFavoritePostsRequest> {}
export interface AddFavoriteInputPort extends InputPort<AddFavoriteRequest> {}
export interface RemoveFavoriteInputPort extends InputPort<RemoveFavoriteRequest> {}
export interface GetAllPostsInputPort extends InputPort<GetAllPostsRequest> {}
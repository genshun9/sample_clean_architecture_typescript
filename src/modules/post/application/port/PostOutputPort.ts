import {OutputPort} from "../../../../shared/application/OutputPort";
import {
    AddFavoriteResponse,
    CreatePostResponse,
    GetAllPostsRequest,
    GetFavoritePostsResponse,
    GetPostResponse,
    GetUserPostsResponse, RemoveFavoriteResponse
} from "../dto";

export interface PostOutputPort extends OutputPort {
    successCreatePost(post: CreatePostResponse): void;
    successGetPost(post: GetPostResponse): void;
    successGetUserPosts(posts: GetUserPostsResponse): void;
    successGetFavoritePosts(posts: GetFavoritePostsResponse): void;
    successAddFavorite(post: AddFavoriteResponse): void;
    successRemoveFavorite(post: RemoveFavoriteResponse): void;
    successGetAllPosts(posts: GetAllPostsRequest): void;
}
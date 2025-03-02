import {OutputPort} from "../../../../shared/application/OutputPort";
import {CreatePostResponse, GetAllPostsRequest, GetPostResponse, GetUserPostsResponse} from "../dto";

export interface PostOutputPort extends OutputPort {
    successCreatePost(post: CreatePostResponse): void;
    successGetPost(post: GetPostResponse): void;
    successGetUserPosts(posts: GetUserPostsResponse): void;
    successGetAllPosts(posts: GetAllPostsRequest): void;
}
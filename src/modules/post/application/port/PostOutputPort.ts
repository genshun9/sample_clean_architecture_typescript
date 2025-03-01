import {IOutputPort} from "../../../../shared/application/OutputPort";
import {CreatePostResponse, GetAllPostsRequest, GetPostResponse, GetUserPostsResponse} from "../dto";

export interface IPostOutputPort extends IOutputPort {
    successCreatePost(post: CreatePostResponse): void;
    successGetPost(post: GetPostResponse): void;
    successGetUserPosts(posts: GetUserPostsResponse): void;
    successGetAllPosts(posts: GetAllPostsRequest): void;
}
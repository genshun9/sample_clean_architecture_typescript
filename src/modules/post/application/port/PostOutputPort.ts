import {IOutputPort} from "../../../../shared/application/OutputPort";
import {GetAllPostsRequest, GetPostResponse} from "../dto";

export interface IPostOutputPort extends IOutputPort {
    // TODO: DTOにする
    successCreatePost(): void;
    successGetPost(post: GetPostResponse): void;
    successGetAllPosts(posts: GetAllPostsRequest): void;
}
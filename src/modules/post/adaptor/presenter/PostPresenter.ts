import {Presenter} from "../../../../shared/adaptor/Presenter";
import {PostOutputPort} from "../../application/port/PostOutputPort";
import {CreatePostResponse, GetUserPostsResponse} from "../../application/dto";

export class PostPresenter extends Presenter implements PostOutputPort {
    successCreatePost(post: CreatePostResponse): void {
        this.response.send(post);
    }
    successGetPost(post: any): void {
        this.response.send(post);
    }

    successGetUserPosts(posts: GetUserPostsResponse) {
        this.response.send(posts);
    }

    successGetAllPosts(posts: any): void {
        this.response.send(posts);
    }
}
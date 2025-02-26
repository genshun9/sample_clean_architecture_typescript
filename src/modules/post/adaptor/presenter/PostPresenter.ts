import {Presenter} from "../../../../shared/adaptor/Presenter";
import {IPostOutputPort} from "../../application/port/PostOutputPort";

export class PostPresenter extends Presenter implements IPostOutputPort {
    successCreatePost(): void {
        this.response.send();
    }
    successGetPost(post: any): void {
        this.response.send(post);
    }
    successGetAllPosts(posts: any): void {
        this.response.send(posts);
    }
}
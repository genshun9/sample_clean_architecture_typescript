import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";

export interface IPostRepository {
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findAll(): Promise<Post[]>;
}

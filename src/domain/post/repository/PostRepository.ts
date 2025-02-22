import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";

export interface PostRepository {
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findAll(): Promise<Post[]>;
}

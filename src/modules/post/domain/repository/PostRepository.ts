import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {IRepository} from "../../../../shared/domain/Repository";

export interface IPostRepository extends IRepository<Post, PostID, string>{
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findAll(): Promise<Post[]>;
}

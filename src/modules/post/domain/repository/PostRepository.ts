import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {Repository} from "../../../../shared/domain/Repository";
import {UserID} from "../../../user/domain/valueObject/UserID";

export interface PostRepository extends Repository<Post, PostID, string>{
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findSomeByUserID(userID: UserID): Promise<Post[]>;
    findAll(): Promise<Post[]>;
}

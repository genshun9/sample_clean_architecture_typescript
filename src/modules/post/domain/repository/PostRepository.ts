import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {IRepository} from "../../../../shared/domain/Repository";
import {UserID} from "../../../user/domain/valueObject/UserID";

export interface IPostRepository extends IRepository<Post, PostID, string>{
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findSomeByUserID(userID: UserID): Promise<Post[]>;
    findAll(): Promise<Post[]>;
}

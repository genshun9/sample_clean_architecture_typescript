import {PostRepository} from "../../../../domain/repository/PostRepository";
import {Post} from "../../../../domain/entity/Post";
import {PostID} from "../../../../domain/valueObject/PostID";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";
import {UserID} from "../../../../../user/domain/valueObject/UserID";

export class PostGateway extends Gateway<Post, PostID, string> implements PostRepository {
    // 適当にキャッシュで持たせる
    private cache: Post[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(post: Post): Promise<void> {
        this.cache.push(post);
    }

    async findOneByID(id: PostID): Promise<Post | null> {
        const post = this.cache.find(p => p.getID() === id);
        if (post === undefined) {
            return null;
        } else {
            return post;
        }
    }

    async findSomeByUserID(userID: UserID): Promise<Post[]> {
        return this.cache.filter(p => p.getPostedUserID().equals(userID));
    }

    async findAll(): Promise<Post[]> {
        return this.cache;
    }
}
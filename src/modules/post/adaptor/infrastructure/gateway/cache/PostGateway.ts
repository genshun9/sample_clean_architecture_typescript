import {IPostRepository} from "../../../../domain/repository/PostRepository";
import {Post} from "../../../../domain/entity/Post";
import {PostID} from "../../../../domain/valueObject/PostID";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";

export class PostGateway extends Gateway<Post, PostID, string> implements IPostRepository {
    // 適当な実装
    private cache: Post[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(post: Post): Promise<void> {
        this.cache.push(post);
    }

    async findOneByID(id: PostID): Promise<Post | null> {
        const post = this.cache.find(u => u.getID() === id);
        if (post === undefined) {
            return null;
        } else {
            return post;
        }
    }

    async findAll(): Promise<Post[]> {
        return this.cache;
    }
}
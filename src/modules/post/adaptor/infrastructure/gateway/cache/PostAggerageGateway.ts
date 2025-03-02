import {PostID} from "../../../../domain/valueObject/PostID";
import {UserID} from "../../../../../user/domain/valueObject/UserID";
import {
    AddFavoriteParam,
    PostAggregateRepository,
    RemoveFavoriteParam
} from "../../../../domain/repository/PostAggregateRepository";
import {Post} from "../../../../domain/entity/Post";
import {PostAggregate} from "../../../../domain/aggregate/PostAggregate";

export class PostAggregateGateway implements PostAggregateRepository {
    // 適当にキャッシュで持たせる
    private readonly cache: PostAggregate[];
    constructor() {
        this.cache = []; //初期化
    }

    async save(post: Post): Promise<void> {
        const postAggregate:PostAggregate = new PostAggregate(post.getID(), post, []);
        this.cache.push(postAggregate);
    }

    async findOneByID(id: PostID): Promise<Post | null> {
        const aggregate = this.cache.find(a => a.getID().equals(id));
        if (aggregate === undefined) {
            return null;
        } else {
            return aggregate.rootEntity;
        }
    }

    async findSomeByUserID(id: UserID): Promise<Post[]> {
        return this.cache.filter(a => a.getPostedUserID().equals(id)).map(a => a.rootEntity);
    }

    async findFavoritePostsByUserID(userID: UserID): Promise<Post[]> {
        const aggregate = this.cache.filter(a => a.getFavoriteUserIDs().some(id => id.equals(userID)));
        return aggregate.map(a => a.rootEntity);
    }

    async saveFavorite(param: AddFavoriteParam): Promise<PostAggregate> {
        const aggregate = this.cache.find(a => a.getID().equals(param.postID));
        if (aggregate === undefined) {
            throw new Error("No POST FOUND");
        }
        return aggregate.addFavorite(param.userID);
    }
    async saveUnfavorite(param: RemoveFavoriteParam): Promise<PostAggregate> {
        const aggregate = this.cache.find(a => a.getID().equals(param.postID));
        if (aggregate === undefined) {
            throw new Error("No POST FOUND");
        }
        return aggregate.removeFavorite(param.userID);
    }
    async findAll(): Promise<PostAggregate[]> {
        return this.cache;
    }
}
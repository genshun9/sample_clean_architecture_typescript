import {PostID} from "../../../../domain/valueObject/PostID";
import {UserID} from "../../../../../user/domain/valueObject/UserID";
import {PostAggregateRepository} from "../../../../domain/repository/PostAggregateRepository";
import {PostAggregate} from "../../../../domain/aggregate/PostAggregate";

export class PostAggregateGateway implements PostAggregateRepository {
    // 適当にキャッシュで持たせる
    private cache: PostAggregate[];
    constructor() {
        this.cache = []; //初期化
    }

    async save(aggregate: PostAggregate): Promise<void> {
        const index = this.cache.findIndex(a => a.getID().equals(aggregate.getID()));
        if (index >= 0) {
            this.cache[index] = aggregate;
        } else {
            this.cache.push(aggregate);
        }
    }

    async findByID(id: PostID): Promise<PostAggregate | null> {
        const aggregate = this.cache.find(a => a.getID().equals(id));
        if (aggregate === undefined) {
            return null;
        } else {
            return aggregate;
        }
    }

    async findByUserID(id: UserID): Promise<PostAggregate[]> {
        return this.cache.filter(a => a.getPostedUserID().equals(id));
    }

    async findFavoritePostsByUserID(userID: UserID): Promise<PostAggregate[]> {
        return this.cache.filter(a => a.getFavoriteUserIDs().some(id => id.equals(userID)));
    }

    async findAll(): Promise<PostAggregate[]> {
        return this.cache;
    }
}

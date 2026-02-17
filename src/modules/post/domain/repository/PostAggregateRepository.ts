import {PostID} from "../valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostAggregate} from "../aggregate/PostAggregate";
import {Post} from "../entity/Post";
import {AggregateRepository} from "../../../../shared/domain/Aggregate";

export interface PostAggregateRepository extends AggregateRepository<PostAggregate, Post, PostID, string>{
    save(aggregate: PostAggregate): Promise<void>;
    findByID(id: PostID): Promise<PostAggregate | null>;
    findByUserID(id: UserID): Promise<PostAggregate[]>;
    findFavoritePostsByUserID(userID: UserID): Promise<PostAggregate[]>;
    findAll(): Promise<PostAggregate[]>;
}

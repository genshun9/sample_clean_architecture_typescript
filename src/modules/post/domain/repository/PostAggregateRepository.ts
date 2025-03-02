import {PostID} from "../valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostAggregate} from "../aggregate/PostAggregate";
import {AggregateRepository} from "../../../../shared/domain/Aggregate";
import {Post} from "../entity/Post";

export interface PostAggregateRepository extends AggregateRepository<PostAggregate, Post, PostID, string>{
    save(postAggregate: PostAggregate): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findSomeByUserID(userID: UserID): Promise<Post[]>;
    findFavoritesByUserID(userID: UserID): Promise<Post[]>;
    findAll(): Promise<Post[]>;
}
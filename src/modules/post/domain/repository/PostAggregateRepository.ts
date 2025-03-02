import {PostID} from "../valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostAggregate} from "../aggregate/PostAggregate";
import {Post} from "../entity/Post";
import {AggregateRepository} from "../../../../shared/domain/Aggregate";

// EntityとAggregateが互換性を持たせる場合Repositoryを継承すれば良い。今回は使わず。
// export interface PostAggregateRepository extends Repository<PostAggregate, PostID, string>{

export interface PostAggregateRepository extends AggregateRepository<PostAggregate, Post, PostID, string>{
    save(post: Post): Promise<void>;
    findOneByID(id: PostID): Promise<Post | null>;
    findSomeByUserID(id: UserID): Promise<Post[]>;
    findFavoritePostsByUserID(userID: UserID): Promise<Post[]>;
    saveFavorite(postID: PostID, userID: UserID): Promise<PostAggregate>;
    saveUnfavorite(postID: PostID, userID: UserID): Promise<PostAggregate>;
    findAll(): Promise<PostAggregate[]>;
}
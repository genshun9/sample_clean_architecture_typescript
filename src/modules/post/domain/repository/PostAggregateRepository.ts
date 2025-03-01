import {PostID} from "../valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {IRepository} from "../../../../shared/domain/Repository";
import {Post} from "../entity/Post";

// export interface IPostAggregateRepository extends IRepository<PostAggregate, PostID, string>{
//     save(postAggregate: PostAggregate): Promise<void>;
//     findOneByID(id: PostID): Promise<PostAggregate | null>;
//     findByUserID(userID: UserID): Promise<PostAggregate[]>;
//     findFavoritesByUserID(userID: UserID): Promise<PostAggregate[]>;
//     findAll(): Promise<PostAggregate[]>;
// }
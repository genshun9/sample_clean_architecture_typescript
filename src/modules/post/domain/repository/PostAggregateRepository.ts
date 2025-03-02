import {PostID} from "../valueObject/PostID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {Repository} from "../../../../shared/domain/Repository";
import {Post} from "../entity/Post";

// export interface PostAggregateRepository extends Repository<PostAggregate, PostID, string>{
//     save(postAggregate: PostAggregate): Promise<void>;
//     findOneByID(id: PostID): Promise<PostAggregate | null>;
//     findByUserID(userID: UserID): Promise<PostAggregate[]>;
//     findFavoritesByUserID(userID: UserID): Promise<PostAggregate[]>;
//     findAll(): Promise<PostAggregate[]>;
// }
import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {Favorite} from "../../../favorite/domain/entity/Favorite";
import {Message} from "../valueObject/Message";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {FavoriteID} from "../../../favorite/domain/valueObject/FavoriteID";
import {Aggregate} from "../../../../shared/domain/Aggregate";

// export class PostAggregate extends Aggregate<Post, PostID, string> {
//     constructor(
//         readonly rootEntity: Post,
//         private readonly favorites: Favorite[]
//     ) {
//         super(rootEntity);
//     }
//
//     getID(): PostID {
//         return this.getRoot().getID();
//     }
//
//     getMessage(): Message {
//         return this.getRoot().getMessage();
//     }
//
//     getFavoriteUserIDs(): UserID[] {
//         return this.favorites.map(f => f.getUserID());
//     }
//
//
//     isFavoritedBy(userID: UserID): boolean {
//         return this.favorites.some(f => f.getUserID().equals(userID));
//     }
//
//     getFavoriteCount(): number {
//         return this.favorites.length;
//     }
//
//     addFavorite(userID: UserID): PostAggregate {
//         // 既にお気に入り済みなら何もしない
//         if (this.isFavoritedBy(userID)) {
//             return this;
//         }
//
//         // 新しいお気に入りを作成
//         const favoriteID = FavoriteID.create(crypto.randomUUID());
//         const favorite = new Favorite(
//             favoriteID,
//             userID,
//             this.getRoot().getID(),
//             new Date()
//         );
//
//         // 新しい集約を返す
//         return new PostAggregate(
//             this.getRoot(),
//             [...this.favorites, favorite]
//         );
//     }
//
//     removeFavorite(userID: UserID): PostAggregate {
//         // お気に入りしていなければ何もしない
//         if (!this.isFavoritedBy(userID)) {
//             return this;
//         }
//
//         // 該当ユーザーのお気に入りを除外
//         const updatedFavorites = this.favorites.filter(
//             f => !f.getUserID().equals(userID)
//         );
//
//         // 新しい集約を返す
//         return new PostAggregate(
//             this.getRoot(),
//             updatedFavorites
//         );
//     }
// }
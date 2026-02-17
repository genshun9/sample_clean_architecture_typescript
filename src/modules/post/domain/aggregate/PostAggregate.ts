import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {Favorite} from "../../../favorite/domain/entity/Favorite";
import {Message} from "../valueObject/Message";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {FavoriteID} from "../../../favorite/domain/valueObject/FavoriteID";
import {Aggregate} from "../../../../shared/domain/Aggregate";

// 投稿集約 (Post + Favorite[])
// Aggregateは不変。状態変更メソッドは新しいインスタンスを返す。
export class PostAggregate extends Aggregate<Post, PostID, string> {
    constructor(
        id: PostID,
        private readonly _rootEntity: Post,
        private readonly favorites: Favorite[]
    ) {
        super(id, _rootEntity);
    }

    getMessage(): Message {
        return this.getRoot().getMessage();
    }

    getPostedUserID(): UserID {
        return this.getRoot().getPostedUserID();
    }

    getCreatedAt(): Date {
        return this.getRoot().getCreatedAt();
    }

    getFavoriteUserIDs(): UserID[] {
        return this.favorites.map(f => f.getUserID());
    }

    isFavorited(userID: UserID): boolean {
        return this.favorites.some(f => f.getUserID().equals(userID));
    }

    getFavoriteCount(): number {
        return this.favorites.length;
    }

    addFavorite(userID: UserID): PostAggregate {
        // 既にお気に入り済みなら何もしない
        if (this.isFavorited(userID)) {
            // エラーを返すかどうか検討
            return this;
        }

        // FavoriteFactoryを作るか検討
        const favoriteID = FavoriteID.create(crypto.randomUUID());
        const favorite = new Favorite(
            favoriteID,
            userID,
            this.getRoot().getID(),
            new Date()
        );

        // 新しいRootEntityを返す
        return new PostAggregate(
            this.getID(),
            this.getRoot(),
            [...this.favorites, favorite]
        );
    }

    removeFavorite(userID: UserID): PostAggregate {
        // お気に入りしていなければ何もしない
        if (!this.isFavorited(userID)) {
            // エラーを返すかどうか検討
            return this;
        }

        // 該当Favoriteを除外
        const updatedFavorites = this.favorites.filter(
            f => !f.getUserID().equals(userID)
        );

        // 新しいRootEntityを返す
        return new PostAggregate(
            this.getID(),
            this.getRoot(),
            updatedFavorites
        );
    }
}

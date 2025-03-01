import {Entity} from "../../../../shared/domain/Entity";
import {FavoriteID} from "../valueObject/FavoriteID";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {PostID} from "../../../post/domain/valueObject/PostID";

export class Favorite extends Entity<FavoriteID, string> {
    constructor(
        readonly id: FavoriteID,
        private readonly userID: UserID,
        private readonly postID: PostID,
        private readonly createdAt: Date,
    ) {
        super(id);
    }

    getID(): FavoriteID {
        return this.id;
    }

    getUserID(): UserID {
        return this.userID;
    }

    getPostID(): PostID {
        return this.postID;
    }

    getCreatedAt(): Date {
        return this.createdAt
    }
}
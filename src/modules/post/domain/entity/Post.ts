import {PostID} from "../valueObject/PostID";
import {Message} from "../valueObject/Message";
import {UserID} from "../../../user/domain/valueObject/UserID";
import {Entity} from "../../../../shared/domain/Entity";

export class Post extends Entity<PostID, string>{
    constructor(
        readonly id: PostID,
        private readonly message: Message,
        private readonly postedBy: UserID,
        private readonly createdAt: Date
    ) {
        super(id);
    }

    getID(): PostID {
        return this.id;
    }
    getMessage(): Message {
        return this.message;
    }

    getPostedUserID(): UserID {
        return this.postedBy
    }

    getCreatedAt(): Date {
        return this.createdAt
    }
}
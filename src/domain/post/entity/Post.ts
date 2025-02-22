import {PostID} from "../valueObject/PostID";
import {Message} from "../valueObject/Message";
import {UserID} from "../../user/valueObject/UserID";

export class Post {
    constructor(
        private readonly id: PostID,
        private message: Message,
        private postedBy: UserID,
        private readonly createdAt: Date
    ) {}

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
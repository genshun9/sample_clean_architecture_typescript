import {Post} from "../entity/Post";
import {PostID} from "../valueObject/PostID";
import {Factory} from "../../../../shared/domain/Factory";
import {Message} from "../valueObject/Message";
import {UserID} from "../../../user/domain/valueObject/UserID";

export class PostFactory implements Factory<Post, PostID, string> {
    create(m: string, userID: string): Post {
        try {
            // ID生成はFactory内で実装
            const postID = PostID.create(crypto.randomUUID());
            const message = new Message(m);
            const postUserID = new UserID(userID);
            const now = new Date();
            return new Post(postID, message, postUserID, now);
        } catch (err) {
            throw new Error("Invalid Create");
        }
    }
}

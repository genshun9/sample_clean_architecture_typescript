import {Post} from "../../domain/entity/Post";
import {UserName} from "../../../user/domain/valueObject/UserName";

export class PostResponse {
    constructor(
        public readonly id: string,
        public readonly message: string,
        public readonly postedUserInfo: {
            id: string,
            name: string
        },
        public readonly createdAt: Date
    ) {}

    static fromEntity(post: Post, userName: UserName): PostResponse {
        return new PostResponse(
            post.getID().getValue(),
            post.getMessage().getValue(),
            {
                id: post.getPostedUserID().getValue(),
                name: userName.getValue()
            },
            post.getCreatedAt()
        );
    }
}
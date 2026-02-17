import {PostAggregate} from "../../domain/aggregate/PostAggregate";
import {Post} from "../../domain/entity/Post";

export interface PostDTO {
    id: string;
    message: string;
    userId: string;
    favorites: number;
    createdAt: Date;
}

export const convertPost2postDto = (post: Post) => ({
    id: post.getID().getValue(),
    message: post.getMessage().getValue(),
    userId: post.getPostedUserID().getValue(),
    favorites: 0, //作成時は必ず0なので
    createdAt: post.getCreatedAt()
}) as PostDTO;

export const convertAggregate2PostDTO = (postAggregate:PostAggregate) => ({
    id: postAggregate.getID().getValue(),
    message: postAggregate.getMessage().getValue(),
    userId: postAggregate.getPostedUserID().getValue(),
    favorites: postAggregate.getFavoriteCount(),
    createdAt: postAggregate.getCreatedAt()
}) as PostDTO;

import {IPostRepository} from "../../domain/repository/PostRepository";
import {IUserRepository} from "../../../user/domain/repository/UserRepository";
import {PostResponse} from "../dto/PostResponse";
import {PostID} from "../../domain/valueObject/PostID";

export class GetPostUseCase {
    constructor(
        private postRepository: IPostRepository,
        private userRepository: IUserRepository
    ) {}

    async execute(postId: string): Promise<PostResponse> {
        //Postを取得
        const post = await this.postRepository.findOneByID(new PostID(postId));
        if (!post) throw new Error("PostNotFound");

        // PostUserの情報を取得
        const user = await this.userRepository.findOneByID(post.getPostedUserID());
        if (!user) throw new Error("UserNotFound");

        // レスポンスDTOを作成
        return PostResponse.fromEntity(post, user.getName());
    }
}

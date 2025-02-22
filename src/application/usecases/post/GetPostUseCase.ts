import {PostRepository} from "../../../domain/post/repository/PostRepository";
import {UserRepository} from "../../../domain/user/repository/UserRepository";
import {PostResponse} from "../../dto/post/PostResponse";
import {PostID} from "../../../domain/post/valueObject/PostID";

export class GetPostUseCase {
    constructor(
        private postRepository: PostRepository,
        private userRepository: UserRepository
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

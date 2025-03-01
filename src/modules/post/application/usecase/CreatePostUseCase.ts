import {IPostRepository} from "../../domain/repository/PostRepository";
import {PostFactory} from "../../domain/factory/PostFactory";
import {ICreatePostInputPort} from "../port/PostInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {IPostOutputPort} from "../port/PostOutputPort";
import {CreatePostRequest} from "../dto";

export class CreatePostUseCase extends UseCase<CreatePostRequest> implements ICreatePostInputPort {
    constructor(
        private readonly postRepository: IPostRepository,
        private readonly postFactory: PostFactory,
        readonly outputPort: IPostOutputPort,
    ) {
        super(outputPort);
    }

    async execute(request: CreatePostRequest): Promise<void> {
        try {
            // Factory経由で作成
            const post = this.postFactory.create(request.message, request.userId);
            // 永続化
            await this.postRepository.save(post);
            this.outputPort.successCreatePost({post});
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
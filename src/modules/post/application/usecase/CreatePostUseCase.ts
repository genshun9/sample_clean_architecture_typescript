import {PostFactory} from "../../domain/factory/PostFactory";
import {CreatePostInputPort} from "../port/PostInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {PostOutputPort} from "../port/PostOutputPort";
import {CreatePostRequest} from "../dto";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

export class CreatePostUseCase extends UseCase<CreatePostRequest> implements CreatePostInputPort {
    constructor(
        readonly outputPort: PostOutputPort,
        private readonly postRepository: PostAggregateRepository,
        private readonly postFactory: PostFactory,
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
import { inject, injectable } from "tsyringe";
import {PostFactory} from "../../domain/factory/PostFactory";
import {CreatePostInputPort} from "../port/PostInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {PostOutputPort} from "../port/PostOutputPort";
import {CreatePostRequest} from "../dto";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

@injectable()
export class CreatePostUseCase extends UseCase<CreatePostRequest> implements CreatePostInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
        @inject("PostFactory") private readonly postFactory: PostFactory,
    ) {
        super();
    }

    async execute(request: CreatePostRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Factory経由で作成
            const post = this.postFactory.create(request.message, request.userId);
            // 永続化
            await this.postAggregateRepository.save(post);
            (this.outputPort as PostOutputPort).successCreatePost({post});
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }
    }
}
import {UseCase} from "../../../../shared/application/UseCase";
import {
    RemoveFavoriteRequest,
    convertRemoveFavoriteRequest2Dto,
    convertPost2RemoveFavoritePostResponse,
} from "../dto";
import {RemoveFavoriteInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class RemoveFavoriteUseCase extends UseCase<RemoveFavoriteRequest> implements RemoveFavoriteInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
    ) {
        super();
    }

    async execute(request: RemoveFavoriteRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            const {postID, userID} = convertRemoveFavoriteRequest2Dto(request);
            // Repository経由でAggregate取得
            const aggregate = await this.postAggregateRepository.findByID(postID);
            if (aggregate === null) {
                throw new Error("Post not found");
            }
            // ドメインロジック実行
            const updatedAggregate = aggregate.removeFavorite(userID);
            // 永続化
            await this.postAggregateRepository.save(updatedAggregate);
            (this.outputPort as PostOutputPort).successRemoveFavorite(convertPost2RemoveFavoritePostResponse(updatedAggregate));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

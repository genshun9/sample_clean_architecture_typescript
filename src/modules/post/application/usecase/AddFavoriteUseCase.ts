import {UseCase} from "../../../../shared/application/UseCase";
import {
    AddFavoriteRequest,
    convertAddFavoriteRequest2Dto,
    convertPost2AddFavoritePostResponse,
} from "../dto";
import {AddFavoriteInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class AddFavoriteUseCase extends UseCase<AddFavoriteRequest> implements AddFavoriteInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
    ) {
        super();
    }

    async execute(request: AddFavoriteRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            const {postID, userID} = convertAddFavoriteRequest2Dto(request);
            // Repository経由でAggregate取得
            const aggregate = await this.postAggregateRepository.findByID(postID);
            if (aggregate === null) {
                throw new Error("Post not found");
            }
            // ドメインロジック実行
            const updatedAggregate = aggregate.addFavorite(userID);
            // 永続化
            await this.postAggregateRepository.save(updatedAggregate);
            (this.outputPort as PostOutputPort).successAddFavorite(convertPost2AddFavoritePostResponse(updatedAggregate));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

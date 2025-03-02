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
            //Repository経由で取得
            const postAggregate = await this.postAggregateRepository.saveFavorite(convertAddFavoriteRequest2Dto(request));
            (this.outputPort as PostOutputPort).successAddFavorite(convertPost2AddFavoritePostResponse(postAggregate.rootEntity));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

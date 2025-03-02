import {UseCase} from "../../../../shared/application/UseCase";
import {
    AddFavoriteRequest,
    convertAddFavoriteRequest2Dto,
    convertPost2AddFavoritePostResponse,
} from "../dto";
import {AddFavoriteInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

export class AddFavoriteUseCase extends UseCase<AddFavoriteRequest> implements AddFavoriteInputPort {
    constructor(
        readonly outputPort: PostOutputPort,
        private readonly postRepository: PostAggregateRepository,
    ) {
        super(outputPort);
    }

    async execute(request: AddFavoriteRequest): Promise<void> {
        try {
            //Repository経由で取得
            const postAggregate = await this.postRepository.saveFavorite(convertAddFavoriteRequest2Dto(request));
            this.outputPort.successAddFavorite(convertPost2AddFavoritePostResponse(postAggregate.rootEntity));
        } catch {
            this.outputPort.failure(new Error("error"));
        }

    }
}

import {UseCase} from "../../../../shared/application/UseCase";
import {
    RemoveFavoriteRequest,
    convertRemoveFavoriteRequest2Dto,
    convertPost2RemoveFavoritePostResponse,
} from "../dto";
import {RemoveFavoriteInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

export class RemoveFavoriteUseCase extends UseCase<RemoveFavoriteRequest> implements RemoveFavoriteInputPort {
    constructor(
        readonly outputPort: PostOutputPort,
        private readonly postRepository: PostAggregateRepository,
    ) {
        super(outputPort);
    }

    async execute(request: RemoveFavoriteRequest): Promise<void> {
        try {
            //Repository経由で取得
            const postAggregate = await this.postRepository.saveFavorite(convertRemoveFavoriteRequest2Dto(request));
            this.outputPort.successRemoveFavorite(convertPost2RemoveFavoritePostResponse(postAggregate.rootEntity));
        } catch {
            this.outputPort.failure(new Error("error"));
        }

    }
}

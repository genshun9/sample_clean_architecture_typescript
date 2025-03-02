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
            //Repository経由で取得
            const postAggregate = await this.postAggregateRepository.saveFavorite(convertRemoveFavoriteRequest2Dto(request));
            (this.outputPort as PostOutputPort).successRemoveFavorite(convertPost2RemoveFavoritePostResponse(postAggregate.rootEntity));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

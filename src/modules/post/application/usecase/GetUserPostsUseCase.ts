import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetUserPostsRequest2Dto, GetUserPostsRequest} from "../dto";
import {GetUserPostsInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetUserPostsUseCase extends UseCase<GetUserPostsRequest> implements GetUserPostsInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
    ) {
        super();
    }

    async execute(request: GetUserPostsRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Repository経由で取得
            const aggregates = await this.postAggregateRepository.findByUserID(convertGetUserPostsRequest2Dto(request));
            (this.outputPort as PostOutputPort).successGetUserPosts({postAggregates: aggregates});
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

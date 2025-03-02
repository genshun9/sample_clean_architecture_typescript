import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetUserPostsRequest2Dto, convertPosts2GetUserPostsResponse, GetUserPostsRequest} from "../dto";
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
            //Repository経由で取得
            const posts = await this.postAggregateRepository.findSomeByUserID(convertGetUserPostsRequest2Dto(request));
            (this.outputPort as PostOutputPort).successGetUserPosts(convertPosts2GetUserPostsResponse(posts));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

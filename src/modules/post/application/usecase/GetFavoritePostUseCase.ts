import {UseCase} from "../../../../shared/application/UseCase";
import {
    convertGetFavoritePostsRequest2Dto,
    convertPosts2GetFavoritePostsResponse,
    GetFavoritePostsRequest,
    GetUserPostsRequest
} from "../dto";
import {GetFavoritePostsInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

export class GetFavoritePostsUseCase extends UseCase<GetFavoritePostsRequest> implements GetFavoritePostsInputPort {
    constructor(
        readonly outputPort: PostOutputPort,
        private readonly postRepository: PostAggregateRepository,
    ) {
        super(outputPort);
    }

    async execute(request: GetUserPostsRequest): Promise<void> {
        try {
            //Repository経由で取得
            const posts = await this.postRepository.findFavoritePostsByUserID(convertGetFavoritePostsRequest2Dto(request));
            this.outputPort.successGetFavoritePosts(convertPosts2GetFavoritePostsResponse(posts));
        } catch {
            this.outputPort.failure(new Error("error"));
        }

    }
}

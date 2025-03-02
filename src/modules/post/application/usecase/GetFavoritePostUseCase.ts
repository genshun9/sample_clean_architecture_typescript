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
import {inject, injectable} from "tsyringe";

@injectable()
export class GetFavoritePostsUseCase extends UseCase<GetFavoritePostsRequest> implements GetFavoritePostsInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
    ) {
        super();
    }

    async execute(request: GetUserPostsRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            //Repository経由で取得
            const posts = await this.postAggregateRepository.findFavoritePostsByUserID(convertGetFavoritePostsRequest2Dto(request));
            (this.outputPort as PostOutputPort).successGetFavoritePosts(convertPosts2GetFavoritePostsResponse(posts));
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}

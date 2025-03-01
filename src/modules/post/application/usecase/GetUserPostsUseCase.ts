import {IPostRepository} from "../../domain/repository/PostRepository";
import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetUserPostsRequest2Dto, convertPosts2GetUserPostsResponse, GetUserPostsRequest} from "../dto";
import {IGetUserPostsInputPort} from "../port/PostInputPort";
import {IPostOutputPort} from "../port/PostOutputPort";

export class GetUserPostsUseCase extends UseCase<GetUserPostsRequest> implements IGetUserPostsInputPort {
    constructor(
        private readonly postRepository: IPostRepository,
        readonly outputPort: IPostOutputPort
    ) {
        super(outputPort);
    }

    async execute(request: GetUserPostsRequest): Promise<void> {
        try {
            //Repository経由で取得
            const posts = await this.postRepository.findSomeByUserID(convertGetUserPostsRequest2Dto(request));
            this.outputPort.successGetUserPosts(convertPosts2GetUserPostsResponse(posts));
        } catch {
            this.outputPort.failure(new Error("error"));
        }

    }
}

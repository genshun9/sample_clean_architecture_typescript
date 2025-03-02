import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetPostRequest2Dto, convertPost2GetPostResponse, GetPostRequest} from "../dto";
import {GetPostInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";

export class GetPostUseCase extends UseCase<GetPostRequest> implements GetPostInputPort {
    constructor(
        readonly outputPort: PostOutputPort,
        private readonly postRepository: PostAggregateRepository,
    ) {
        super(outputPort);
    }

    async execute(request: GetPostRequest): Promise<void> {
        try {
            //Repository経由で取得
            const post = await this.postRepository.findOneByID(convertGetPostRequest2Dto(request));
            if (post === null) {
                throw new Error("NO POST");
            }
            this.outputPort.successGetPost(convertPost2GetPostResponse(post));
        } catch {
            this.outputPort.failure(new Error("error"));
        }

    }
}

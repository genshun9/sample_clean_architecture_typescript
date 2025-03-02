import {GetHashTagInputPort} from "../port/HashTagInputPort";
import {HashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagOutputPort} from "../port/HashTagOutputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetHashTagRequest2Dto, convertHashTag2GetHashTagResponse, GetHashTagRequest} from "../dto";

export class GetHashTagUseCase extends UseCase<GetHashTagRequest> implements GetHashTagInputPort {
    constructor(
        readonly outputPort: HashTagOutputPort,
        private readonly hashTagRepository: HashTagRepository,
    ) {
        super(outputPort);
    }

    async execute(request: GetHashTagRequest): Promise<void> {
        try {
            //Repository経由で取得
            const post = await this.hashTagRepository.findOneByID(convertGetHashTagRequest2Dto(request));
            if (post === null) {
                throw new Error("NO HASHTAG");
            }
            this.outputPort.successGetHashTag(convertHashTag2GetHashTagResponse(post));
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
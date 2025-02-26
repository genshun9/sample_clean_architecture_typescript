import {IGetHashTagInputPort} from "../port/HashTagInputPort";
import {IHashTagRepository} from "../../domain/repository/HashTagRepository";
import {IHashTagOutputPort} from "../port/HashTagOutputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetHashTagRequest2Dto, convertHashTag2GetHashTagResponse, GetHashTagRequest} from "../dto";

export class GetHashTagUseCase extends UseCase<GetHashTagRequest> implements IGetHashTagInputPort {
    constructor(
        private readonly hashTagRepository: IHashTagRepository,
        readonly outputPort: IHashTagOutputPort
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
import {IGetAllHashTagsInputPort} from "../port/HashTagInputPort";
import {IHashTagRepository} from "../../domain/repository/HashTagRepository";
import {IHashTagOutputPort} from "../port/HashTagOutputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {
    convertHashTag2GetAllHashTagsResponse,
    GetAllHashTagsRequest,
} from "../dto";

export class GetAllHashTagsUseCase extends UseCase<GetAllHashTagsRequest> implements IGetAllHashTagsInputPort {
    constructor(
        private readonly hashTagRepository: IHashTagRepository,
        readonly outputPort: IHashTagOutputPort
    ) {
        super(outputPort);
    }

    async execute(request: GetAllHashTagsRequest): Promise<void> {
        try {
            //Repository経由で取得
            const posts = await this.hashTagRepository.findAll();
            this.outputPort.successGetAllHashTags(convertHashTag2GetAllHashTagsResponse(posts));
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
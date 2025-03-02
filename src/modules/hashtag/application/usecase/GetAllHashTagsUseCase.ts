import {GetAllHashTagsInputPort} from "../port/HashTagInputPort";
import {HashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagOutputPort} from "../port/HashTagOutputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {
    convertHashTag2GetAllHashTagsResponse,
    GetAllHashTagsRequest,
} from "../dto";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetAllHashTagsUseCase extends UseCase<GetAllHashTagsRequest> implements GetAllHashTagsInputPort {
    constructor(
        @inject("HashTagRepository") private readonly hashTagRepository: HashTagRepository,
    ) {
        super();
    }

    async execute(_: GetAllHashTagsRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            //Repository経由で取得
            const posts = await this.hashTagRepository.findAll();
            (this.outputPort as HashTagOutputPort).successGetAllHashTags(convertHashTag2GetAllHashTagsResponse(posts));
        } catch {
            (this.outputPort as HashTagOutputPort).failure(new Error("error"));
        }
    }
}
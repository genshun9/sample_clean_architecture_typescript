import {GetHashTagInputPort} from "../port/HashTagInputPort";
import {HashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagOutputPort} from "../port/HashTagOutputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetHashTagRequest2Dto, convertHashTag2GetHashTagResponse, GetHashTagRequest} from "../dto";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetHashTagUseCase extends UseCase<GetHashTagRequest> implements GetHashTagInputPort {
    constructor(
        @inject("HashTagRepository") private readonly hashTagRepository: HashTagRepository,
    ) {
        super();
    }

    async execute(request: GetHashTagRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            //Repository経由で取得
            const post = await this.hashTagRepository.findOneByID(convertGetHashTagRequest2Dto(request));
            if (post === null) {
                throw new Error("NO HASHTAG");
            }
            (this.outputPort as HashTagOutputPort).successGetHashTag(convertHashTag2GetHashTagResponse(post));
        } catch {
            (this.outputPort as HashTagOutputPort).failure(new Error("error"));
        }
    }
}
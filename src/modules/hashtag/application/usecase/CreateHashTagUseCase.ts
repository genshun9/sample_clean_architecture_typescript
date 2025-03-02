import {CreateHashTagInputPort} from "../port/HashTagInputPort";
import {HashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {CreateHashTagRequest} from "../dto";
import {HashTagOutputPort} from "../port/HashTagOutputPort";

export class CreateHashTagUseCase implements CreateHashTagInputPort {
    constructor(
        private readonly outputPort: HashTagOutputPort,
        private readonly hashTagRepository: HashTagRepository,
        private readonly hashTagFactory: HashTagFactory,
    ) {}

    async execute(request: CreateHashTagRequest): Promise<void> {
        try {
            // Factory経由で作成
            const hashTag = this.hashTagFactory.create(request.text);
            // 永続化
            await this.hashTagRepository.save(hashTag);
            this.outputPort.successCreateHashTag({hashTag});
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
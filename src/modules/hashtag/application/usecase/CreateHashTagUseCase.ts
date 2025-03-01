import {ICreateHashTagInputPort} from "../port/HashTagInputPort";
import {IHashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {CreateHashTagRequest} from "../dto";
import {IHashTagOutputPort} from "../port/HashTagOutputPort";

export class CreateHashTagUseCase implements ICreateHashTagInputPort {
    constructor(
        private readonly outputPort: IHashTagOutputPort,
        private readonly hashTagRepository: IHashTagRepository,
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
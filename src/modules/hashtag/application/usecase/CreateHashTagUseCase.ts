import {CreateHashTagRequest, ICreateHashTagInputPort} from "../port/HashTagInputPort";
import {IHashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {ICreateHashTagOutputPort} from "../port/HashTagOutputPort";

export class CreateHashTagUseCase implements ICreateHashTagInputPort {
    constructor(
        private readonly hashTagRepository: IHashTagRepository,
        private readonly hashTagFactory: HashTagFactory,
        private readonly outputPort: ICreateHashTagOutputPort
    ) {}

    async execute(request: CreateHashTagRequest): Promise<void> {
        // Factory経由で作成
        const hashTag = this.hashTagFactory.create(request.text);
        // 永続化
        await this.hashTagRepository.save(hashTag);
        this.outputPort.success({});
    }
}
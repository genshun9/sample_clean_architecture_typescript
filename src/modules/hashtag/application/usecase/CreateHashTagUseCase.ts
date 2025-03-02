import { inject, injectable } from "tsyringe";
import {CreateHashTagInputPort} from "../port/HashTagInputPort";
import {HashTagRepository} from "../../domain/repository/HashTagRepository";
import {HashTagFactory} from "../../domain/factory/HashTagFactory";
import {CreateHashTagRequest} from "../dto";
import {HashTagOutputPort} from "../port/HashTagOutputPort";
import {UserRepository} from "../../../user/domain/repository/UserRepository";
import {UserFactory} from "../../../user/domain/factory/UserFactory";
import {UseCase} from "../../../../shared/application/UseCase";
import {CreateUserRequest} from "../../../user/application/dto";

@injectable()
export class CreateHashTagUseCase extends UseCase<CreateHashTagRequest> implements CreateHashTagInputPort {
    constructor(
        @inject("HashTagRepository") private readonly hashTagRepository: HashTagRepository,
        @inject("HashTagFactory") private readonly hashTagFactory: HashTagFactory,
    ) {
        super();
    }

    async execute(request: CreateHashTagRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Factory経由で作成
            const hashTag = this.hashTagFactory.create(request.text);
            // 永続化
            await this.hashTagRepository.save(hashTag);
            (this.outputPort as HashTagOutputPort).successCreateHashTag({hashTag});
        } catch {
            (this.outputPort as HashTagOutputPort).failure(new Error("error"));
        }
    }
}
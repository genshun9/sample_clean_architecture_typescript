import {GetHashTagRequest, IGetHashTagInputPort} from "../port/HashTagInputPort";
import {IHashTagRepository} from "../../domain/repository/HashTagRepository";
import {ICreateHashTagOutputPort} from "../port/HashTagOutputPort";
import {HashTagID} from "../../domain/valueObject/HashTagID";

export class GetHashTagUseCase implements IGetHashTagInputPort {
    constructor(
        private readonly hashTagRepository: IHashTagRepository,
        private readonly outputPort: ICreateHashTagOutputPort
    ) {}

    async execute(request: GetHashTagRequest): Promise<void> {
        const hashTag = this.hashTagRepository.findOneByID(new HashTagID(request.hashTagID));
        this.outputPort.success(hashTag);
    }
}
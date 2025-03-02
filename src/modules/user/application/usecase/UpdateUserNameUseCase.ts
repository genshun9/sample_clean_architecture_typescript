import {UserRepository} from "../../domain/repository/UserRepository";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertUpdateUserNameRequest2Dto, convertUser2GetUserResponse, UpdateUserNameRequest
} from "../dto";
import {UpdateUserNameInputPort} from "../port/UserInputPort";

export class UpdateUserNameUseCase extends UseCase<UpdateUserNameRequest> implements UpdateUserNameInputPort {
    constructor(
        readonly outputPort: UserOutputPort,
        private readonly userRepository: UserRepository,
    ) {
        super(outputPort);
    }

    async execute(request: UpdateUserNameRequest): Promise<void> {
        try {
            // Repository経由で更新
            const updateUser = await this.userRepository.updateUserName(convertUpdateUserNameRequest2Dto(request));
            this.outputPort.successUpdateUserName(convertUser2GetUserResponse(updateUser));
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
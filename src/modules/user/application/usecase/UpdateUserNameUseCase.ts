import {IUserRepository} from "../../domain/repository/UserRepository";
import {UseCase} from "../../../../shared/application/UseCase";
import {IUserOutputPort} from "../port/UserOutputPort";
import {
    convertUpdateUserNameRequest2Dto, convertUser2GetUserResponse, UpdateUserNameRequest
} from "../dto";
import {IUpdateUserNameInputPort} from "../port/UserInputPort";

export class UpdateUserNameUseCase extends UseCase<UpdateUserNameRequest> implements IUpdateUserNameInputPort {
    constructor(
        readonly outputPort: IUserOutputPort,
        private readonly userRepository: IUserRepository,
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
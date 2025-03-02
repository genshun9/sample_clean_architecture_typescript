import {inject, injectable} from "tsyringe";
import {UserRepository} from "../../domain/repository/UserRepository";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertUpdateUserNameRequest2Dto, convertUser2GetUserResponse, UpdateUserNameRequest
} from "../dto";
import {UpdateUserNameInputPort} from "../port/UserInputPort";

@injectable()
export class UpdateUserNameUseCase extends UseCase<UpdateUserNameRequest> implements UpdateUserNameInputPort {
    constructor(
        @inject("UserRepository") private readonly userRepository: UserRepository,
    ) {
        super();
    }

    async execute(request: UpdateUserNameRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Repository経由で更新
            const updateUser = await this.userRepository.updateUserName(convertUpdateUserNameRequest2Dto(request));
            (this.outputPort as UserOutputPort).successUpdateUserName(convertUser2GetUserResponse(updateUser));
        } catch {
            (this.outputPort as UserOutputPort).failure(new Error("error"));
        }
    }
}
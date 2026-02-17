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
            // Repository経由でUser取得
            const dto = convertUpdateUserNameRequest2Dto(request);
            const user = await this.userRepository.findOneByID(dto.userID);
            if (user === null) {
                throw new Error("User not found");
            }
            // ドメインロジック実行
            const updatedUser = user.updateName(dto.name);
            // 永続化
            await this.userRepository.save(updatedUser);
            (this.outputPort as UserOutputPort).successUpdateUserName(convertUser2GetUserResponse(updatedUser));
        } catch {
            (this.outputPort as UserOutputPort).failure(new Error("error"));
        }
    }
}

import { inject, injectable } from "tsyringe";
import {UserRepository} from "../../domain/repository/UserRepository";
import {GetUserInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertGetUserRequest2Dto,
    convertUser2GetUserResponse,
    GetUserRequest
} from "../dto";

@injectable()
export class GetUserUseCase extends UseCase<GetUserRequest> implements GetUserInputPort {
    constructor(
        @inject("UserRepository") private readonly userRepository: UserRepository,
    ) {
        super();
    }

    async execute(request: GetUserRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Repository経由で取得
            const user = await this.userRepository.findOneByID(convertGetUserRequest2Dto(request));
            if (user === null) {
                throw new Error("NO USER");
            }
            (this.outputPort as UserOutputPort).successGetUser(convertUser2GetUserResponse(user));
        } catch {
            (this.outputPort as UserOutputPort).failure(new Error("error"));
        }
    }
}
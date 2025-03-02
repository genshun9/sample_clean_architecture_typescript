import { inject, injectable } from "tsyringe";
import {UserRepository} from "../../domain/repository/UserRepository";
import {GetAllUsersInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertUsers2GetAllUsersResponse,
    GetAllUsersRequest
} from "../dto";

@injectable()
export class GetAllUsersUseCase extends UseCase<GetAllUsersRequest> implements GetAllUsersInputPort {
    constructor(
        @inject("UserRepository") private readonly userRepository: UserRepository,
    ) {
        super();
    }

    async execute(request: GetAllUsersRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Repository経由で取得
            const users = await this.userRepository.findAll();
            (this.outputPort as UserOutputPort).successGetAllUsers(convertUsers2GetAllUsersResponse(users));
        } catch {
            (this.outputPort as UserOutputPort).failure(new Error("error"));
        }
    }
}
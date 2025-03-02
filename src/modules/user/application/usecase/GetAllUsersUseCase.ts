import {UserRepository} from "../../domain/repository/UserRepository";
import {GetAllUsersInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertUsers2GetAllUsersResponse,
    GetAllUsersRequest
} from "../dto";

export class GetAllUsersUseCase extends UseCase<GetAllUsersRequest> implements GetAllUsersInputPort {
    constructor(
        readonly outputPort: UserOutputPort,
        private readonly userRepository: UserRepository,
    ) {
        super(outputPort);
    }

    async execute(request: GetAllUsersRequest): Promise<void> {
        try {
            // Repository経由で取得
            const users = await this.userRepository.findAll();
            this.outputPort.successGetAllUsers(convertUsers2GetAllUsersResponse(users));
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
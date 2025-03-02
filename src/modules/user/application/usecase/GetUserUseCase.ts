import {UserRepository} from "../../domain/repository/UserRepository";
import {GetUserInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {
    convertGetUserRequest2Dto,
    convertUser2GetUserResponse,
    GetUserRequest
} from "../dto";

export class GetUserUseCase extends UseCase<GetUserRequest> implements GetUserInputPort {
    constructor(
        readonly outputPort: UserOutputPort,
        private readonly userRepository: UserRepository,
    ) {
        super(outputPort);
    }

    async execute(request: GetUserRequest): Promise<void> {
        try {
            // Repository経由で取得
            const user = await this.userRepository.findOneByID(convertGetUserRequest2Dto(request));
            if (user === null) {
                throw new Error("NO USER");
            }
            this.outputPort.successGetUser(convertUser2GetUserResponse(user));
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
import {IUserRepository} from "../../domain/repository/UserRepository";
import {UserFactory} from "../../domain/factory/UserFactory";
import {Email} from "../../domain/valueObject/Email";
import {ICreateUserInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {IUserOutputPort} from "../port/UserOutputPort";
import {Result} from "../../../../shared/application/UseCaseResult";
import {CreateUserRequest, CreateUserResponse} from "../dto";

export class CreateUserUseCase extends UseCase<CreateUserRequest> implements ICreateUserInputPort {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly userFactory: UserFactory,
        readonly outputPort: IUserOutputPort,
    ) {
        super(outputPort);
    }

    async execute(request: CreateUserRequest): Promise<void> {
        // メールアドレスの重複チェック
        // ValueObjectを一旦ここで生成する
        try {
            const existingUser = await this.userRepository.findByEmail(new Email(request.email));
            if (existingUser) {
                throw new Error('Email already exists');
            }
            // Factory経由で作成
            const user = this.userFactory.create(request.name, request.email);
            // 永続化
            await this.userRepository.save(user);
            this.outputPort.successCreateUser();
        } catch {
            this.outputPort.failure(new Error("error"));
        }
    }
}
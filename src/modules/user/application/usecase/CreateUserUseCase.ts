import {IUserRepository} from "../../domain/repository/UserRepository";
import {UserFactory} from "../../domain/factory/UserFactory";
import {User} from "../../domain/entity/User";
import {Email} from "../../domain/valueObject/Email";
import {CreateUserRequest, ICreateUserInputPort} from "../port/CreateUserInputPort";
import {ICreateUserOutputPort} from "../port/CreateUserOutputPort";

export class CreateUserUseCase implements ICreateUserInputPort {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly userFactory: UserFactory,
        private readonly outputPort: ICreateUserOutputPort
    ) {}

    async execute(request: CreateUserRequest): Promise<void> {
        // メールアドレスの重複チェック
        // ValueObjectを一旦ここで生成する
        const existingUser = await this.userRepository.findByEmail(new Email(request.email));
        if (existingUser) {
            throw new Error('Email already exists');
        }
        // Factory経由で作成
        const user = this.userFactory.create(request.name, request.email);
        // 永続化
        await this.userRepository.save(user);
        // return user;
    }
}
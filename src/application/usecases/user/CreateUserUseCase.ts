import {UserRepository} from "../../../domain/user/repository/UserRepository";
import {UserFactory} from "../../../domain/user/factory/UserFactory";
import {User} from "../../../domain/user/entity/User";
import {Email} from "../../../domain/user/valueObject/Email";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private userFactory: UserFactory
    ) {}

    async execute(name: string, email: string): Promise<User> {
        // メールアドレスの重複チェック
        // ValueObjectを一旦ここで生成する
        const existingUser = await this.userRepository.findByEmail(new Email(email));
        if (existingUser) {
            throw new Error('Email already exists');
        }
        // Factory経由で作成
        const user = UserFactory.create(name, email);
        // 永続化
        await this.userRepository.save(user);
        return user;
    }
}
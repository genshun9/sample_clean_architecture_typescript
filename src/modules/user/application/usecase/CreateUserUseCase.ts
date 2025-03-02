import { inject, injectable } from "tsyringe";
import {UserRepository} from "../../domain/repository/UserRepository";
import {UserFactory} from "../../domain/factory/UserFactory";
import {Email} from "../../domain/valueObject/Email";
import {CreateUserInputPort} from "../port/UserInputPort";
import {UseCase} from "../../../../shared/application/UseCase";
import {UserOutputPort} from "../port/UserOutputPort";
import {CreateUserRequest} from "../dto";

@injectable()
export class CreateUserUseCase extends UseCase<CreateUserRequest> implements CreateUserInputPort {
    constructor(
        @inject("UserRepository") private readonly userRepository: UserRepository,
        @inject("UserFactory") private readonly userFactory: UserFactory,
    ) {
        super();
    }

    async execute(request: CreateUserRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // メールアドレスの重複チェック
            const existingUser = await this.userRepository.findByEmail(new Email(request.email));
            if (existingUser) {
                throw new Error('Email already exists');
            }
            // Factory経由で作成
            const user = this.userFactory.create(request.name, request.email);
            // 永続化
            await this.userRepository.save(user);
            (this.outputPort as UserOutputPort).successCreateUser({user});
        } catch {
            (this.outputPort as UserOutputPort).failure(new Error("error"));
        }
    }
}
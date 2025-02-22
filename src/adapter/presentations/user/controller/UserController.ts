import {CreateUserUseCase} from "../../../../application/usecases/user/CreateUserUseCase";

export class UserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        // private getUserUseCase: GetUserUseCase,
        // private listUserUseCase: ListUserUseCase
    ) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, email } = req;
            const user = await this.createUserUseCase.execute(name, email);
        } catch (error) {
            // エラーハンドリング
        }
    }
}
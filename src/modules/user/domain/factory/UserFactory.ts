import {User} from "../entity/User";
import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";
import {IFactory} from "../../../../shared/domain/Factory";

export class UserFactory implements IFactory<User, UserID, string> {
    create(name: string, email: string): User {
        // 一旦ID生成はFactory内で実装
        const userId = UserID.create(crypto.randomUUID());
        const userName = new UserName(name);
        const userEmail = new Email(email);
        const now = new Date();

        return new User(userId, userName, userEmail, now, now);
    }
}

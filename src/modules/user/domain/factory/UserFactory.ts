import {User} from "../entity/User";
import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";

export class UserFactory {
    static create(name: string, email: string): User {
        // 一旦ID生成はFactory内で実装
        const userId = new UserID(crypto.randomUUID());
        const userName = new UserName(name);
        const userEmail = new Email(email);
        const now = new Date();

        return new User(userId, userName, userEmail, now, now);
    }
}

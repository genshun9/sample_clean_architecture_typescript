import {User} from "../entity/User";
import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";
import {Factory} from "../../../../shared/domain/Factory";

export class UserFactory implements Factory<User, UserID, string> {
    create(name: string, email: string): User {
        try {
            // ID生成はFactory内で実装
            const userId = UserID.create(crypto.randomUUID());
            const userName = new UserName(name);
            const userEmail = new Email(email);
            const now = new Date();
            return new User(userId, userName, userEmail, now, now);
        } catch (err) {
            throw new Error(`Invalid Create: ${err}`);
        }
    }
}

import {UserRepository} from "../../../../domain/repository/UserRepository";
import {User} from "../../../../domain/entity/User";
import {UserID} from "../../../../domain/valueObject/UserID";
import {Email} from "../../../../domain/valueObject/Email";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";
import {UserName} from "../../../../domain/valueObject/UserName";

export interface UpdateUserNameParam {
    userID: UserID,
    name: UserName
}
export class UserGateway extends Gateway<User, UserID, string> implements UserRepository {
    // 適当にキャッシュで持たせる
    private readonly cache: User[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(user: User): Promise<void> {
        this.cache.push(user);
    }

    async findOneByID(id: UserID): Promise<User | null> {
        const user = this.cache.find(u => u.getID().equals(id));
        if (user === undefined) {
            return null;
        } else {
            return user;
        }
    }
    async findSomeByIDs(ids: UserID[]): Promise<User[]> {
        return this.cache.filter(u => ids.some(id => u.getID().equals(id)));
    }

    async findAll(): Promise<User[]> {
        return this.cache;
    }

    async findByEmail(email: Email): Promise<User | null> {
        const user = this.cache.find(u => u.getEmail().equals(email));
        if (user === undefined) {
            return null
        } else {
            return user;
        }
    }

    async updateUserName(param: UpdateUserNameParam): Promise<User> {
        const user = this.cache.find(u => u.getID().equals(param.userID));
        if (user === undefined) {
            throw new Error("user not found");
        } else {
            const updateUser = user.updateName(param.name);
            return updateUser;
        }

    }
}
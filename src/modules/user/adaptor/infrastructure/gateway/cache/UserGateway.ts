import {UserRepository} from "../../../../domain/repository/UserRepository";
import {User} from "../../../../domain/entity/User";
import {UserID} from "../../../../domain/valueObject/UserID";
import {Email} from "../../../../domain/valueObject/Email";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";

export class UserGateway extends Gateway<User, UserID, string> implements UserRepository {
    // 適当にキャッシュで持たせる
    private cache: User[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(user: User): Promise<void> {
        // 既存ユーザーの場合は更新、新規の場合は追加
        const index = this.cache.findIndex(u => u.getID().equals(user.getID()));
        if (index >= 0) {
            this.cache[index] = user;
        } else {
            this.cache.push(user);
        }
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
}

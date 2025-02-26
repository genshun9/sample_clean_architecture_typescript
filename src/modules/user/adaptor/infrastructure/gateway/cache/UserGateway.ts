import {IUserRepository} from "../../../../domain/repository/UserRepository";
import {User} from "../../../../domain/entity/User";
import {UserID} from "../../../../domain/valueObject/UserID";
import {Email} from "../../../../domain/valueObject/Email";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";

export class UserGateway extends Gateway<User, UserID, string> implements IUserRepository {
    // 適当な実装
    private cache: User[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(user: User): Promise<void> {
        this.cache.push(user);
    }

    async findOneByID(id: UserID): Promise<User | null> {
        const user = this.cache.find(u => u.getID() === id);
        if (user === undefined) {
            return null;
        } else {
            return user;
        }
    }
    async findSomeByIDs(ids: UserID[]): Promise<User[]> {
        return this.cache.filter(u => ids.some(id => id === u.getID()));
    }

    async findAll(): Promise<User[]> {
        return this.cache;
    }

    async findByEmail(email: Email): Promise<User | null> {
        const user = this.cache.find(u => u.getEmail() === email);
        if (user === undefined) {
            return null
        } else {
            return user;
        }
    }
}
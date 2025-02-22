import {UserRepository} from "../../../../../domain/user/repository/UserRepository";
import {User} from "../../../../../domain/user/entity/User";
import {UserID} from "@domain/user/valueObject/UserID";
import {Email} from "@domain/user/valueObject/Email";

export class UserGateway implements UserRepository {
    // 適当な実装
    private cache: any;
    constructor() {
    }

    async save(user: User): Promise<void> {
        this.cache.set(user.getID().getValue(), user);
    }

    async findOneByID(id: UserID): Promise<User | null> {

    }
    async findSomeByIDs(ids: UserID[]): Promise<User[]> {

    }

    async findAll(): Promise<User[]> {

    }
    async findByEmail(email: Email): Promise<User | null> {

    }
}
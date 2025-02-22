import {User} from "../entity/User";
import {UserID} from "../valueObject/UserID";
import {Email} from "../valueObject/Email";

export interface UserRepository {
    save(user: User): Promise<void>;
    findOneByID(id: UserID): Promise<User | null>;
    findSomeByIDs(ids: UserID[]): Promise<User[]>;
    findAll(): Promise<User[]>;
    findByEmail(email: Email): Promise<User | null>;
}

import {User} from "../entity/User";
import {UserID} from "../valueObject/UserID";
import {Email} from "../valueObject/Email";
import {Repository} from "../../../../shared/domain/Repository";

export interface UserRepository extends Repository<User, UserID, string> {
    save(user: User): Promise<void>;
    findOneByID(id: UserID): Promise<User | null>;
    findSomeByIDs(ids: UserID[]): Promise<User[]>;
    findAll(): Promise<User[]>;
    findByEmail(email: Email): Promise<User | null>;
}

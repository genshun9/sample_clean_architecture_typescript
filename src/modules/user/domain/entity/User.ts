import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";
import {Entity} from "../../../../shared/domain/Entity";

export class User extends Entity<UserID, string> {
    constructor(
        readonly id: UserID, //privateにするとエラーが発生する。なんでだっけ？
        private name: UserName,
        private email: Email,
        private readonly createdAt: Date,
        private updatedAt: Date
    ) {
        super(id);
    }

    getID(): UserID {
        return this.id;
    }
    getName(): UserName {
        return this.name;
    }

    getEmail(): Email {
        return this.email
    }

    // UseCase層などでUserNameにして渡す方が厳密
    updateName(newName: string): void {
        this.name = new UserName(newName);
        this.updatedAt = new Date();
    }
}
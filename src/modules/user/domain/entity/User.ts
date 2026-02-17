import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";
import {Entity} from "../../../../shared/domain/Entity";

export class User extends Entity<UserID, string> {
    constructor(
        readonly id: UserID,
        private readonly name: UserName,
        private readonly email: Email,
        private readonly createdAt: Date,
        private readonly updatedAt: Date
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

    getCreatedAt(): Date {
        return this.createdAt
    }

    getUpdatedAt(): Date {
        return this.updatedAt
    }

    // 名前を変更した新しいインスタンスを返す
    updateName(newName: UserName): User {
        return new User(this.id, newName, this.email, this.createdAt, new Date());
    }
}

import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";
import {Entity} from "../../../../shared/domain/Entity";

export class User extends Entity<UserID, string> {
    constructor(
        readonly id: UserID,
        private name: UserName,
        private readonly email: Email,
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

    getCreatedAt(): Date {
        return this.createdAt
    }

    getUpdatedAt(): Date {
        return this.updatedAt
    }

    // 自身を返却
    updateName(newName: UserName): User {
        this.name = newName;
        this.updatedAt = new Date();
        return this;
    }
}
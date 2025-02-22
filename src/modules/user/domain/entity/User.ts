import {UserID} from "../valueObject/UserID";
import {UserName} from "../valueObject/UserName";
import {Email} from "../valueObject/Email";

export class User {
    constructor(
        private readonly id: UserID,
        private name: UserName,
        private email: Email,
        private readonly createdAt: Date,
        private updatedAt: Date
    ) {}

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
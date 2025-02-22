import {EntityID} from "../../../../shared/domain/EntityID";

export class UserID extends EntityID<string> {
    constructor(value: string) {
        super(value);
    }

    static create(value: string): UserID {
        return new UserID(value);
    }

    getValue(): string {
        return this.value;
    }
}
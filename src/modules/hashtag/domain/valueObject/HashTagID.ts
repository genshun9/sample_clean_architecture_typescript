import {EntityID} from "../../../../shared/domain/EntityID";

export class HashTagID extends EntityID<string> {
    constructor(value: string) {
        super(value);
    }

    static create(value: string): HashTagID {
        return new HashTagID(value);
    }

    getValue(): string {
        return this.value;
    }
}
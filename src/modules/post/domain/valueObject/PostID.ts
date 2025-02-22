import {EntityID} from "../../../../shared/domain/EntityID";

export class PostID extends EntityID<string> {
    constructor(value: string) {
        super(value);
    }

    static create(value: string): PostID {
        return new PostID(value);
    }

    getValue(): string {
        return this.value;
    }
}
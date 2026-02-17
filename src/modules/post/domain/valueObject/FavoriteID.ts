import {EntityID} from "../../../../shared/domain/EntityID";

export class FavoriteID extends EntityID<string> {
    constructor(value: string) {
        super(value);
    }

    static create(value: string): FavoriteID {
        return new FavoriteID(value);
    }

    getValue(): string {
        return this.value;
    }
}

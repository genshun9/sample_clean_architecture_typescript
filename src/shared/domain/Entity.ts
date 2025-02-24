import {EntityID} from "./EntityID";

export abstract class Entity<T extends EntityID<U>, U> {
    constructor(protected readonly id: T) {}

    getID(): T {
        return this.id;
    }

    equals(entity?: Entity<T, U>): boolean {
        if (entity === null || entity === undefined) {
            return false
        }
        return this.id.equals(entity.getID());
    }
}
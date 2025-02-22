import {EntityID} from "./EntityID";

export abstract class Entity<T extends EntityID<any>> {
    constructor(protected readonly id: T) {}

    getID(): T {
        return this.id;
    }

    equals(entity?: Entity<T>): boolean {
        if (entity === null || entity === undefined) {
            return false
        }
        return this.id.equals(entity.getID());
    }
}
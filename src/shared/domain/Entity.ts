import {EntityID} from "./EntityID";

export abstract class Entity<T extends EntityID<U>, U> {
    protected constructor(protected readonly id: T) {}

    getID(): T {
        return this.id;
    }

    equals(entity: Entity<T, U>): boolean {
        return this.id.equals(entity.getID());
    }
}
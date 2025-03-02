import {EntityID} from "./EntityID";

export abstract class Entity<E extends EntityID<V>, V> {
    protected constructor(protected readonly id: E) {}

    getID(): E {
        return this.id;
    }

    equals(entity: Entity<E, V>): boolean {
        return this.id.equals(entity.getID());
    }
}
import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface Factory<E extends Entity<ID, V>, ID extends EntityID<V>, V> {
    create(...args: any[]): E;
}
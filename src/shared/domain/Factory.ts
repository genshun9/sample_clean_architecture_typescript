import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface Factory<T extends Entity<ID, V>, ID extends EntityID<V>, V> {
    create(...args: any[]): T;
}
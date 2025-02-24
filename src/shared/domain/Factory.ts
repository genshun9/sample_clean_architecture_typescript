import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface IFactory<T extends Entity<ID, V>, ID extends EntityID<V>, V> {
    create(...args: any[]): T;
}
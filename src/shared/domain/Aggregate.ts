import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export abstract class Aggregate<T extends Entity<ID, V>, ID extends EntityID<V>, V> {
    constructor(protected readonly rootEntity: T) {}

    // RootEntityへのアクセス
    protected getRoot(): T {
        return this.rootEntity;
    }
}
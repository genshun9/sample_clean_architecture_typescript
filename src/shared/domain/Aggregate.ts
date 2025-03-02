import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export abstract class Aggregate<E extends Entity<ID, V>, ID extends EntityID<V>, V> {
    protected constructor(
        protected readonly rootEntity: E
    ) {}

    // RootEntityへのアクセス
    protected getRoot(): E {
        return this.rootEntity;
    }

    //RootEntityのID取得
    getID(): ID {
        return this.rootEntity.getID();
    }

    equals(other: Aggregate<E, ID, V>): boolean {
        if (!other) {
            return false;
        }
        return this.getID().equals(other.getID());
    }
}

export interface AggregateRepository<
    A extends Aggregate<E, ID, V>,
    E extends Entity<ID, V>,
    ID extends EntityID<V>,
    V> {
    save(entity: A): Promise<void>;
    findOneByID(id: ID): Promise<E | null>;
    findAll(): Promise<E[]>;
}
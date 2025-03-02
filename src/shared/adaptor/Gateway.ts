import {Repository} from "../domain/Repository";
import {Entity} from "../domain/Entity";
import {EntityID} from "../domain/EntityID";

export abstract class Gateway<T extends Entity<ID, V>, ID extends EntityID<V>, V>
    implements Repository<T, ID, V> {
    protected constructor() {}

    abstract save(entity: T): Promise<void>;
    abstract findOneByID(id: ID): Promise<T | null>;
    abstract findAll(): Promise<T[]>;
}
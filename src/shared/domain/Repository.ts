import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface Repository<T extends Entity<ID, V>, ID extends EntityID<V>, V> {
    save(entity: T): Promise<void>;
    findOneByID(id: ID): Promise<T | null>;
    findAll(): Promise<T[]>;
}

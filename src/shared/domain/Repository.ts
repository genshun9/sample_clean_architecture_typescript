import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface Repository<E extends Entity<ID, V>, ID extends EntityID<V>, V> {
    save(entity: E): Promise<void>;
    findOneByID(id: ID): Promise<E | null>;
    findAll(): Promise<E[]>;
}

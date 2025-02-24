import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

export interface IRepository<T extends Entity<ID, V>, ID extends EntityID<V>, V> {
    save(entity: T): Promise<void>;
    findOneById(id: any): Promise<T | null>;
    findAll(): Promise<T[]>;
}

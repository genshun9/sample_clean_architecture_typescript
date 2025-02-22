import {Entity} from "./Entity";

export interface IRepository<T extends Entity<any>> {
    save(entity: T): Promise<void>;
    findOneById(id: any): Promise<T | null>;
    findAll(): Promise<T[]>;
}

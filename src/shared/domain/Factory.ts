import {Entity} from "./Entity";

export interface IFactory<T extends Entity<any>> {
    create(...args: any[]): T;
}
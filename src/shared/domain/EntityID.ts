export abstract class EntityID<T> {
    constructor(protected readonly value: T) {}

    equals(id?: EntityID<T>): boolean {
        if (id === null || id === undefined) {
            return false;
        }
        return this.value === id.value;
    }

    getValue(): T {
        return this.value;
    }
}

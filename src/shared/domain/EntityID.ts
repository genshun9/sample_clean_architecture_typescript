export abstract class EntityID<T> {
    protected constructor(protected readonly value: T) {}

    equals(id: EntityID<T>): boolean {
        return this.value === id.value;
    }

    getValue(): T {
        return this.value;
    }
}

export abstract class ValueObject<T> {
    protected constructor(protected readonly value:T) {
        // 親クラスでバリデーション実行
        this.validate(value);
    }
    protected abstract validate(value: T): void;
    equals(vo: ValueObject<T>): boolean {
        return this.value === vo.value;
    }
    getValue():T {
        return this.value;
    }
}
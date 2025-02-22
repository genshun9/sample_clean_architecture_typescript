import {ValueObject} from "../../../../shared/domain/ValueObject";

export class Text extends ValueObject<string> {
    constructor(value: string) {
        super(value);
    }

    protected validate(): void {}

    getValue(): string {
        return this.value;
    }
}
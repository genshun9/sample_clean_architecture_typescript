import {ValueObject} from "../../../../shared/domain/ValueObject";

export class UserName extends ValueObject<string> {
    private static readonly MAX_USERNAME_LENGTH = 10;
    private static readonly MIN_USERNAME_LENGTH = 3;
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (value.length < UserName.MIN_USERNAME_LENGTH || value.length > UserName.MAX_USERNAME_LENGTH) {
            throw new Error(`Username must be between ${UserName.MIN_USERNAME_LENGTH } and ${UserName.MAX_USERNAME_LENGTH} characters`);
        }
    }

    getValue(): string {
        return this.value;
    }
}
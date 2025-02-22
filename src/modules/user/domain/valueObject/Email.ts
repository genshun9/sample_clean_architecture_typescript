import {ValueObject} from "../../../../shared/domain/ValueObject";

export class Email extends ValueObject<string>{
    constructor(value: string) {
        super(value);
    }

    protected validate(value: string): void {
        if (!this.isValidEmail(value)) {
            throw new Error('Invalid email format');
        }
    }

    private isValidEmail(email: string): boolean {
        // メールアドレスの正規表現チェック
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    getValue(): string {
        return this.value;
    }
}

export class Email {
    private readonly value: string;

    constructor(value: string) {
        // メールアドレスのバリデーション
        if (!this.isValidEmail(value)) {
            throw new Error('Invalid email format');
        }
        this.value = value;
    }

    private isValidEmail(email: string): boolean {
        // メールアドレスの正規表現チェック
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    getValue(): string {
        return this.value;
    }
}

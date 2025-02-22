export class Message {
    private readonly value: string;

    private static readonly MAX_Message_LENGTH = 140;
    private static readonly MIN_Message_LENGTH = 0;
    constructor(value: string) {
        if (value.length < Message.MIN_Message_LENGTH || value.length > Message.MAX_Message_LENGTH) {
            throw new Error(`Message must be between ${Message.MIN_Message_LENGTH } and ${Message.MAX_Message_LENGTH} characters`);
        }
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }
}
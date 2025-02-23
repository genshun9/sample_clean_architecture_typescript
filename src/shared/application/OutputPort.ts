export interface IOutputPort {
    // success(response: T): void;
    failure(error: Error): void;
}
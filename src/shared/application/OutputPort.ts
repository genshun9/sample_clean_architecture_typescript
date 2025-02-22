export interface IOutputPort<Response> {
    success(response: Response): void;
    failure(error: Error): void;
}
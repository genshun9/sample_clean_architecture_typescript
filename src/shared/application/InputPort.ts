export interface IInputPort<Request> {
    execute(request: Request): void;
}
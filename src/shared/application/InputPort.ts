export interface IInputPort<Request> {
    execute(request: Request): Promise<void>;
}
export interface IInputPort<RequestDto> {
    execute(request: RequestDto): Promise<void>;
}
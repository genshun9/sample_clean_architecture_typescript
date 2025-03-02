export interface InputPort<RequestDto> {
    execute(request: RequestDto): Promise<void>;
}
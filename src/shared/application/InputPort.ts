import {Result} from "./UseCaseResult";

export interface IInputPort<Request, Response> {
    execute(request?: Request): Promise<Result<Response>>;
}
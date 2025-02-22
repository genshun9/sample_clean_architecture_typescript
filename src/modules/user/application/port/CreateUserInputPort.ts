import {IInputPort} from "../../../../shared/application/InputPort";

export interface CreateUserRequest {
    name: string,
    email: string
}
export interface ICreateUserInputPort extends IInputPort<CreateUserRequest> {}

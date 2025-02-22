import {IInputPort} from "../../../../shared/application/InputPort";

export interface CreateHashTagRequest {
    text: string
}
export interface ICreateHashTagInputPort extends IInputPort<CreateHashTagRequest> {}

export interface GetHashTagRequest {
    hashTagID: string
}
export interface IGetHashTagInputPort extends IInputPort<GetHashTagRequest> {}

export interface GetHashTagsRequest {
    hashTagIDs: string[]
}
export interface IGetHashTagsInputPort extends IInputPort<GetHashTagsRequest> {}

export interface GetAllHashTagsRequest {}
export interface IGetAllHashTagsInputPort extends IInputPort<GetAllHashTagsRequest> {}
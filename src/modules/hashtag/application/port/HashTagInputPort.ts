import {IInputPort} from "../../../../shared/application/InputPort";
import {CreateHashTagRequest, GetAllHashTagsRequest, GetHashTagRequest} from "../dto";

export interface ICreateHashTagInputPort extends IInputPort<CreateHashTagRequest> {}
export interface IGetHashTagInputPort extends IInputPort<GetHashTagRequest> {}
export interface IGetAllHashTagsInputPort extends IInputPort<GetAllHashTagsRequest> {}
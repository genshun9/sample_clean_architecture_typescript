import {InputPort} from "../../../../shared/application/InputPort";
import {CreateHashTagRequest, GetAllHashTagsRequest, GetHashTagRequest} from "../dto";

export interface CreateHashTagInputPort extends InputPort<CreateHashTagRequest> {}
export interface GetHashTagInputPort extends InputPort<GetHashTagRequest> {}
export interface GetAllHashTagsInputPort extends InputPort<GetAllHashTagsRequest> {}
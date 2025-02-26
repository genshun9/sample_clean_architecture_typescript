import {IInputPort} from "../../../../shared/application/InputPort";
import {CreatePostRequest, GetAllPostsRequest, GetPostRequest} from "../dto";

export interface ICreatePostInputPort extends IInputPort<CreatePostRequest> {}
export interface IGetPostInputPort extends IInputPort<GetPostRequest> {}
export interface IGetAllPostsInputPort extends IInputPort<GetAllPostsRequest> {}
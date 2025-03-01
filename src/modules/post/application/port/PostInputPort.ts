import {IInputPort} from "../../../../shared/application/InputPort";
import {CreatePostRequest, GetAllPostsRequest, GetPostRequest, GetUserPostsRequest} from "../dto";

export interface ICreatePostInputPort extends IInputPort<CreatePostRequest> {}
export interface IGetPostInputPort extends IInputPort<GetPostRequest> {}
export interface IGetUserPostsInputPort extends IInputPort<GetUserPostsRequest> {}
export interface IGetAllPostsInputPort extends IInputPort<GetAllPostsRequest> {}
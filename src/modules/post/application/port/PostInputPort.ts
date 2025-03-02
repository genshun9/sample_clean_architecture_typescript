import {InputPort} from "../../../../shared/application/InputPort";
import {CreatePostRequest, GetAllPostsRequest, GetPostRequest, GetUserPostsRequest} from "../dto";

export interface CreatePostInputPort extends InputPort<CreatePostRequest> {}
export interface GetPostInputPort extends InputPort<GetPostRequest> {}
export interface GetUserPostsInputPort extends InputPort<GetUserPostsRequest> {}
export interface GetAllPostsInputPort extends InputPort<GetAllPostsRequest> {}
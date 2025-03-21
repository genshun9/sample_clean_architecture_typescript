import {HashTag} from "../../domain/entity/HashTag";
import {HashTagID} from "../../domain/valueObject/HashTagID";

export interface CreateHashTagRequest {
    text: string,
}
export interface CreateHashTagResponse {
    hashTag: HashTag;
}

export interface GetHashTagRequest {
    id: string,
}
export interface GetHashTagResponse {
    hashTag: HashTag;
}

export interface GetAllHashTagsRequest {}
export interface GetAllHashTagsResponse {
    hashTags: HashTag[];
}

export const convertGetHashTagRequest2Dto = (req:GetHashTagRequest) => HashTagID.create(req.id);
export const convertHashTag2GetHashTagResponse = (hashTag:HashTag) => ({hashTag}) as GetHashTagResponse;
export const convertHashTag2GetAllHashTagsResponse = (hashTags:HashTag[]) => ({hashTags}) as GetAllHashTagsResponse
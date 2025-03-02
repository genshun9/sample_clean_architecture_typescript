import {OutputPort} from "../../../../shared/application/OutputPort";
import {CreateHashTagResponse, GetAllHashTagsResponse, GetHashTagResponse} from "../dto";

export interface HashTagOutputPort extends OutputPort {
    successCreateHashTag(hashTag: CreateHashTagResponse): void;
    successGetHashTag(hashTag: GetHashTagResponse): void;
    successGetAllHashTags(hashTags: GetAllHashTagsResponse): void;
}
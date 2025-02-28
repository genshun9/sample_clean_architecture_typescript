import {IOutputPort} from "../../../../shared/application/OutputPort";
import {CreateHashTagResponse, GetAllHashTagsResponse, GetHashTagResponse} from "../dto";

export interface IHashTagOutputPort extends IOutputPort {
    // TODO: DTOにする
    successCreateHashTag(hashTag: CreateHashTagResponse): void;
    successGetHashTag(hashTag: GetHashTagResponse): void;
    successGetAllHashTags(hashTags: GetAllHashTagsResponse): void;
}
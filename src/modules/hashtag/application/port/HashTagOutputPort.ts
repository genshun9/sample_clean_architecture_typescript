import {IOutputPort} from "../../../../shared/application/OutputPort";
import {GetAllHashTagsRequest, GetHashTagResponse} from "../dto";

export interface IHashTagOutputPort extends IOutputPort {
    // TODO: DTOにする
    successCreateHashTag(): void;
    successGetHashTag(HashTag: GetHashTagResponse): void;
    successGetAllHashTags(HashTags: GetAllHashTagsRequest): void;
}
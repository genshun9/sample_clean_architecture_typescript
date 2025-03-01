import {IHashTagOutputPort} from "../../application/port/HashTagOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";
import {CreateHashTagResponse, GetAllHashTagsResponse, GetHashTagResponse} from "../../application/dto";

export class HashTagPresenter extends Presenter implements IHashTagOutputPort {
    successCreateHashTag(hashTag: CreateHashTagResponse): void {
        this.response.send(hashTag);
    }
    successGetHashTag(hashTag: GetHashTagResponse): void {
        this.response.send(hashTag);
    }

    successGetAllHashTags(hashTags: GetAllHashTagsResponse): void {
        this.response.send(hashTags);
    }
}
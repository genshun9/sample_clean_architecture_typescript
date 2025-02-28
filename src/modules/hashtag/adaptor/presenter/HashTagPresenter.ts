import {IHashTagOutputPort} from "../../application/port/HashTagOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";
import {GetAllHashTagsResponse} from "../../application/dto";

export class HashTagPresenter extends Presenter implements IHashTagOutputPort {
    successCreateHashTag(): void {
        this.response.send();
    }
    successGetHashTag(HashTag: any): void {
        this.response.send(HashTag);
    }

    successGetAllHashTags(HashTags: GetAllHashTagsResponse): void {
        this.response.send(HashTags);
    }
}
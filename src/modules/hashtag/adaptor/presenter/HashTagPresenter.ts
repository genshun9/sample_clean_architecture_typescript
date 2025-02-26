import {IHashTagOutputPort} from "../../application/port/HashTagOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";

export class HashTagPresenter extends Presenter implements IHashTagOutputPort {
    successCreateHashTag(): void {
        this.response.send();
    }
    successGetHashTag(HashTag: any): void {
        this.response.send(HashTag);
    }
    successGetAllHashTags(HashTags: any): void {
        this.response.send(HashTags);
    }
}
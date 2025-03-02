import {HashTagOutputPort} from "../../application/port/HashTagOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";
import {CreateHashTagResponse, GetAllHashTagsResponse, GetHashTagResponse} from "../../application/dto";
import {convertHashTag2HashTagDto, HashTagDTO} from "./dto";

export class HashTagPresenter extends Presenter implements HashTagOutputPort {
    successCreateHashTag(hashTagResponse: CreateHashTagResponse): void {
        const hashTagDto:HashTagDTO = convertHashTag2HashTagDto(hashTagResponse.hashTag);
        this.response.send(hashTagDto);
    }
    successGetHashTag(hashTagResponse: GetHashTagResponse): void {
        const hashTagDto:HashTagDTO = convertHashTag2HashTagDto(hashTagResponse.hashTag);
        this.response.send(hashTagDto);
    }

    successGetAllHashTags(hashTagsResponse: GetAllHashTagsResponse): void {
        const hashTagDtos:HashTagDTO[] = hashTagsResponse.hashTags.map(h => convertHashTag2HashTagDto(h));
        this.response.send(hashTagDtos);
    }
}
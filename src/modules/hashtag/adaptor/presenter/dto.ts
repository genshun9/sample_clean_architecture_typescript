import {HashTag} from "../../domain/entity/HashTag";

export interface HashTagDTO {
    id: string;
    text: string;
    createdAt: Date;
}

export const convertHashTag2HashTagDto = (hashTag: HashTag) => ({
    id: hashTag.getID().getValue(),
    text: hashTag.getText().getValue(),
    createdAt: hashTag.getCreatedAt()
}) as HashTagDTO;
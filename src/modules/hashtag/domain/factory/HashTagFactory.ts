import {IFactory} from "../../../../shared/domain/Factory";
import {HashTag} from "../entity/HashTag";
import {HashTagID} from "../valueObject/HashTagID";
import {Text} from "../valueObject/Text";

export class HashTagFactory implements IFactory<HashTag> {
    create(t: string): HashTag {
        // 一旦ID生成はFactory内で実装
        const hashTagID = HashTagID.create(crypto.randomUUID());
        const text = new Text(t);
        const now = new Date();

        return new HashTag(hashTagID, text, now);
    }
}

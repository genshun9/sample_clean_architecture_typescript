import {Entity} from "../../../../shared/domain/Entity";
import {HashTagID} from "../valueObject/HashTagID";
import {Text} from "../valueObject/Text";

export class HashTag extends Entity<HashTagID, string> {
    constructor(
        readonly id: HashTagID,
        private readonly text: Text,
        private readonly createdAt: Date,
    ) {
        super(id);
    }

    getID(): HashTagID {
        return this.id;
    }

    getText(): Text {
        return this.text;
    }

    getCreatedAt(): Date {
        return this.createdAt
    }
}
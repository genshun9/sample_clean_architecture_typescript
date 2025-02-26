import {IHashTagRepository} from "../../../../domain/repository/HashTagRepository";
import {HashTag} from "../../../../domain/entity/HashTag";
import {HashTagID} from "../../../../domain/valueObject/HashTagID";
import {Gateway} from "../../../../../../shared/adaptor/Gateway";

export class HashTagGateway extends Gateway<HashTag, HashTagID, string> implements IHashTagRepository {
    // 適当な実装
    private cache: HashTag[];
    constructor() {
        super();
        this.cache = []; //初期化
    }

    async save(hashTag: HashTag): Promise<void> {
        this.cache.push(hashTag);
    }

    async findOneByID(id: HashTagID): Promise<HashTag | null> {
        const hashTag = this.cache.find(u => u.getID() === id);
        if (hashTag === undefined) {
            return null;
        } else {
            return hashTag;
        }
    }

    async findSomeByIDs(ids: HashTagID[]): Promise<HashTag[]> {
        return this.cache.filter(h => ids.some(id => id === h.getID()));
    }

    async findAll(): Promise<HashTag[]> {
        return this.cache;
    }
}
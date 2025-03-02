import {Repository} from "../../../../shared/domain/Repository";
import {HashTag} from "../entity/HashTag";
import {HashTagID} from "../valueObject/HashTagID";

export interface HashTagRepository extends Repository<HashTag, HashTagID, string> {
    save(hashTag: HashTag): Promise<void>;
    findOneByID(id: HashTagID): Promise<HashTag | null>;
    findSomeByIDs(ids: HashTagID[]): Promise<HashTag[]>;
    findAll(): Promise<HashTag[]>;
}

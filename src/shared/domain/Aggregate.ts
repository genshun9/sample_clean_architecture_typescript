import {Entity} from "./Entity";
import {EntityID} from "./EntityID";

// 諸々基底クラスを継承させるため、AggregateがEntityと互換性を持つためのインターフェース
// 今回はfindOneByIDの戻り値がAggregateではなくEntityのケースがあり、共通化のデメリットとなるので使わず
// export interface AggregateRoot<ID extends EntityID<V>, V> {
//     getID(): ID;
//     equals(entity: AggregateRoot<ID, V>): boolean;
// }

export abstract class Aggregate<E extends Entity<ID, V>, ID extends EntityID<V>, V> {
    protected constructor(
        protected readonly id: ID,
        protected readonly rootEntity: E
    ) {}

    // RootEntityへのアクセス
    protected getRoot(): E {
        return this.rootEntity;
    }

    //RootEntityのID取得
    getID(): ID {
        return this.rootEntity.getID();
    }

    equals(other: Aggregate<E, ID, V>): boolean {
        if (!other) {
            return false;
        }
        return this.getID().equals(other.getID());
    }
}

// 互換性持たせない場合、Aggregate専用のRepositoryの型を作るしかない
// 永続化の単位はAggregate
export interface AggregateRepository<
    A extends Aggregate<E, ID, V>,
    E extends Entity<ID, V>,
    ID extends EntityID<V>,
    V> {
    save(aggregate: A): Promise<void>;
    findByID(id: ID): Promise<A | null>;
    findAll(): Promise<A[]>;
}

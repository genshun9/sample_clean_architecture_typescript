# sample_clean_architecture_typescript
typescriptでDDD CleanArchitectureの実装

## 設計の言語化や意図
あとで書く

## 実装後に発見した課題と改修内容に関するメモ
### 1. Entityがミュータブルである
- 問題点
    -  `User.updateName()` が破壊的変更による更新であった
    - このオブジェクトは **ここが仕様上変更され得るというのを表現するため** に `name` と `updatedAd` をreadonlyせず実装した
- 改善
    - イミュータブル前提のほうが良い
    - 変更されうるというのはメソッドで表現できるため

```typescript
// Beforeは破壊的変更で自身を返す
updateName(newName: UserName): User {
    this.name = newName;
    this.updatedAt = new Date();
    return this;
}

// Afterは新しいインスタンスを返却
updateName(newName: UserName): User {
    return new User(this.id, newName, this.email, this.createdAt, new Date());
}
```

### 2. ドメインロジックがインフラ層(Gateway)に漏れている
- 問題点
    - `UserRepository.updateUserName()` というインターフェース名にまず違和感
    - `UserGateway.updateUserName()` 内でドメインオブジェクトのビジネスロジックが実行されていた
    - UseCaseでは `repository.updateUserName()` を呼ぶだけでドメインオブジェクトを一切触れていなかった
- 改善
    - Repositoryが提供するべきインターフェースは取得や保存といった粒度であるべき。カラム増えるたびに口が増えるため → `updateUserName()` を削除
    - インターフェースは抽象で良いが、実装については部分的なUPDATEなどはGatewayの内部でやる文にはOK
    - 状態を変更するようなビジネスロジックがドメインの外で行われると、どこでビジネスルールが実行されているのかがわからなくなる

```typescript
// Before
// UseCase
const updateUser = await this.userRepository.updateUserName(params);
// Gateway
async updateUserName(param: UpdateUserNameParam): Promise<User> {
    const user = this.cache.find(...);
    // ドメインロジックの実行がGatewayで行われている
    const updateUser = user.updateName(param.name);
    return updateUser;
}

// After
// UseCase
const user = await this.userRepository.findOneByID(dto.userID);
// UseCase内でドメインロジック実行
const updatedUser = user.withName(dto.name);
// Repositoryは永続化のみ行う
await this.userRepository.save(updatedUser);
```

### 3. PostAggregateの永続化単位が統一されていない

- 問題点
    - `PostAggregateRepository` が `PostEntity` と `PostAggregate`が混ざっていた
    - メソッドによって戻り値が異なっていたので、永続化の単位があやふや
- 改善
    - **Aggregateはオブジェクトの整合性の境界を示す**ので、永続化もAggregate単位で行うべき
    - 全ての戻り値を、Aggregateの単位にした

```typescript
// Before
// Entity単位
save(post: Post): Promise<void>;
findOneByID(id: PostID): Promise<Post | null>;
// Aggregate単位
saveFavorite(param: AddFavoriteParam): Promise<PostAggregate>;
findAll(): Promise<PostAggregate[]>;

// After
save(aggregate: PostAggregate): Promise<void>;
findByID(id: PostID): Promise<PostAggregate | null>;
findByUserID(id: UserID): Promise<PostAggregate[]>;
findFavoritePostsByUserID(userID: UserID): Promise<PostAggregate[]>;
findAll(): Promise<PostAggregate[]>;
```

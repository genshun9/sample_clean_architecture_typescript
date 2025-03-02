import { container } from 'tsyringe';
import {UserRepository} from "./modules/user/domain/repository/UserRepository";
import {UserGateway} from "./modules/user/adaptor/infrastructure/gateway/cache/UserGateway";
import {UserFactory} from "./modules/user/domain/factory/UserFactory";
import {HashTagRepository} from "./modules/hashtag/domain/repository/HashTagRepository";
import {HashTagFactory} from "./modules/hashtag/domain/factory/HashTagFactory";
import {HashTagGateway} from "./modules/hashtag/adaptor/infrastructure/gateway/cache/HashTagGateway";
import {PostAggregateRepository} from "./modules/post/domain/repository/PostAggregateRepository";
import {PostAggregateGateway} from "./modules/post/adaptor/infrastructure/gateway/cache/PostAggerageGateway";
import {PostFactory} from "./modules/post/domain/factory/PostFactory";

// 依存性注入
export const setupDependencyInjection:() => void = () => {
    // User
    container.registerSingleton<UserRepository>('UserRepository', UserGateway);
    container.registerSingleton<UserFactory>('UserFactory', UserFactory);

    // HashTag
    container.registerSingleton<HashTagRepository>('HashTagRepository', HashTagGateway);
    container.registerSingleton<HashTagFactory>('HashTagFactory', HashTagFactory);

    // Post
    container.registerSingleton<PostAggregateRepository>('PostAggregateRepository', PostAggregateGateway);
    container.registerSingleton<PostFactory>('PostFactory', PostFactory);
}

// アプリケーション起動時に初回実行する
export const initializeApplication:() => void = () => {
    setupDependencyInjection();
}
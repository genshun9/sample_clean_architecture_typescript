import {Presenter} from "../../../../shared/adaptor/Presenter";
import {PostOutputPort} from "../../application/port/PostOutputPort";
import {
    AddFavoriteResponse,
    CreatePostResponse,
    GetAllPostsResponse,
    GetFavoritePostsResponse,
    GetPostResponse,
    GetUserPostsResponse,
    RemoveFavoriteResponse
} from "../../application/dto";
import {convertPost2postDto, PostDTO} from "./dto";

export class PostPresenter extends Presenter implements PostOutputPort {
    successCreatePost(postResponse: CreatePostResponse): void {
        const postDto:PostDTO = convertPost2postDto(postResponse.post);
        this.response.send(postDto);
    }
    successGetPost(postResponse: GetPostResponse): void {
        const postDto:PostDTO = convertPost2postDto(postResponse.post);
        this.response.send(postDto);
    }

    successGetUserPosts(postResponse: GetUserPostsResponse) {
        const postDtos:PostDTO[] = postResponse.posts.map(p => convertPost2postDto(p));
        this.response.send(postDtos);
    }

    successGetFavoritePosts(postResponse: GetFavoritePostsResponse) {
        const postDtos:PostDTO[] = postResponse.posts.map(p => convertPost2postDto(p));
        this.response.send(postDtos);
    }

    successAddFavorite(postResponse: AddFavoriteResponse) {
        const postDto:PostDTO = convertPost2postDto(postResponse.post);
        this.response.send(postDto);
    }

    successRemoveFavorite(postResponse: RemoveFavoriteResponse) {
        const postDto:PostDTO = convertPost2postDto(postResponse.post);
        this.response.send(postDto);
    }

    successGetAllPosts(postResponse: GetAllPostsResponse): void {
        const postDtos:PostDTO[] = postResponse.posts.map(p => convertPost2postDto(p));
        this.response.send(postDtos);
    }
}
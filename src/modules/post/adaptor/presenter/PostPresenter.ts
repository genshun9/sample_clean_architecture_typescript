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
import {convertAggregate2PostDTO, PostDTO} from "./dto";

export class PostPresenter extends Presenter implements PostOutputPort {
    successCreatePost(postResponse: CreatePostResponse): void {
        const postDto:PostDTO = convertAggregate2PostDTO(postResponse.postAggregate);
        this.response.send(postDto);
    }
    successGetPost(postResponse: GetPostResponse): void {
        const postDto:PostDTO = convertAggregate2PostDTO(postResponse.postAggregate);
        this.response.send(postDto);
    }

    successGetUserPosts(postResponse: GetUserPostsResponse) {
        const postDtos:PostDTO[] = postResponse.postAggregates.map(a => convertAggregate2PostDTO(a));
        this.response.send(postDtos);
    }

    successGetFavoritePosts(postResponse: GetFavoritePostsResponse) {
        const postDtos:PostDTO[] = postResponse.postAggregates.map(a => convertAggregate2PostDTO(a));
        this.response.send(postDtos);
    }

    successAddFavorite(postResponse: AddFavoriteResponse) {
        const postDto:PostDTO = convertAggregate2PostDTO(postResponse.postAggregate);
        this.response.send(postDto);
    }

    successRemoveFavorite(postResponse: RemoveFavoriteResponse) {
        const postDto:PostDTO = convertAggregate2PostDTO(postResponse.postAggregate);
        this.response.send(postDto);
    }

    successGetAllPosts(postResponse: GetAllPostsResponse): void {
        const postDtos:PostDTO[] = postResponse.postAggregates.map(a => convertAggregate2PostDTO(a));
        this.response.send(postDtos);
    }
}

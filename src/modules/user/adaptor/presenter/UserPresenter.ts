import {UserOutputPort} from "../../application/port/UserOutputPort";
import {Presenter} from "../../../../shared/adaptor/Presenter";
import {CreateUserResponse, GetAllUsersResponse, GetUserResponse, UpdateUserNameResponse} from "../../application/dto";
import {convertUser2UserDto, UserDTO} from "./dto";

export class UserPresenter extends Presenter implements UserOutputPort {
    successCreateUser(userResponse: CreateUserResponse): void {
        const userDto:UserDTO = convertUser2UserDto(userResponse.user);
        this.response.send(userDto);
    }
    successGetUser(userResponse: GetUserResponse): void {
        const userDto:UserDTO = convertUser2UserDto(userResponse.user);
        this.response.send(userDto);
    }

    successGetAllUsers(usersResponse: GetAllUsersResponse): void {
        const userDtos:UserDTO[] = usersResponse.users.map(u => convertUser2UserDto(u));
        this.response.send(userDtos);
    }
    successUpdateUserName(userResponse: UpdateUserNameResponse): void {
        const userDto:UserDTO = convertUser2UserDto(userResponse.user);
        this.response.send(userDto);
    }
}
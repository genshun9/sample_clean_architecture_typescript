import {User} from "../../domain/entity/User";

export interface UserDTO {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export const convertUser2UserDto = (user: User) => ({
    id: user.getID().getValue(),
    name: user.getName().getValue(),
    email: user.getEmail().getValue(),
    createdAt: user.getCreatedAt()
}) as UserDTO;
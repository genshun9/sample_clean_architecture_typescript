import {Request, Response} from "express";
import {CreateUserUseCase} from "../../application/usecase/CreateUserUseCase";
import {UserPresenter} from "../presenter/UserPresenter";
import {UserGateway} from "../infrastructure/gateway/cache/UserGateway";
import {UserFactory} from "../../domain/factory/UserFactory";
import {UpdateUserNameUseCase} from "../../application/usecase/UpdateUserNameUseCase";
import {GetUserUseCase} from "../../application/usecase/GetUserUseCase";
import {GetAllUsersUseCase} from "../../application/usecase/GetAllUsersUseCase";

export const UserController = {
    createUser(req:Request, res:Response):void {
        const request = {
            name: req.body.name,
            email: req.body.email
        }
        const usecase = new CreateUserUseCase(new UserPresenter(res), new UserGateway(), new UserFactory());
        usecase.execute(request);
    },

    getUser(req:Request, res:Response):void {
        const request = {
            userID: req.body.userId
        };
        const usecase = new GetUserUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute(request);
    },

    getAllUsers(req:Request, res:Response):void {
        const usecase = new GetAllUsersUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute({});
    },

    updateName(req:Request, res:Response):void {
        const request = {
            userID: req.body.userId,
            name: req.body.name
        }
        const usecase = new UpdateUserNameUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute(request);
    }
}
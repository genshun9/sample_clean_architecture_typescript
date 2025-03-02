import {Request, Response} from "express";
import {CreateUserUseCase} from "../../application/usecase/CreateUserUseCase";
import {UserPresenter} from "../presenter/UserPresenter";
import {UserGateway} from "../infrastructure/gateway/cache/UserGateway";
import {UserFactory} from "../../domain/factory/UserFactory";
import {UpdateUserNameUseCase} from "../../application/usecase/UpdateUserNameUseCase";
import {GetUserUseCase} from "../../application/usecase/GetUserUseCase";
import {GetAllUsersUseCase} from "../../application/usecase/GetAllUsersUseCase";
import {CreateUserRequest, GetUserRequest, UpdateUserNameRequest} from "../../application/dto";

export const UserController = {
    createUser(req:Request, res:Response):void {
        const name = req.body.name;
        const email = req.body.email;
        if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request: CreateUserRequest = ({name, email});
        const usecase = new CreateUserUseCase(new UserPresenter(res), new UserGateway(), new UserFactory());
        usecase.execute(request);
    },

    getUser(req:Request, res:Response):void {
        const userID = req.query.id;
        if (!userID || typeof userID !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request: GetUserRequest = ({userID});
        const usecase = new GetUserUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute(request);
    },

    getAllUsers(req:Request, res:Response):void {
        const usecase = new GetAllUsersUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute({});
    },

    updateName(req:Request, res:Response):void {
        const userID = req.body.userId;
        const name = req.body.name;
        if (!userID || typeof userID !== 'string' || !name || typeof name !== 'string') {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:UpdateUserNameRequest = ({userID, name});
        const usecase = new UpdateUserNameUseCase(new UserPresenter(res), new UserGateway());
        usecase.execute(request);
    }
}
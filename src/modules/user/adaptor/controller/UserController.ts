import {Request, Response} from "express";
import {CreateUserUseCase} from "../../application/usecase/CreateUserUseCase";
import {UserPresenter} from "../presenter/UserPresenter";
import {UpdateUserNameUseCase} from "../../application/usecase/UpdateUserNameUseCase";
import {GetUserUseCase} from "../../application/usecase/GetUserUseCase";
import {GetAllUsersUseCase} from "../../application/usecase/GetAllUsersUseCase";
import {CreateUserRequest, GetUserRequest, UpdateUserNameRequest} from "../../application/dto";
import {container} from "tsyringe";

export const UserController = {
    createUser(req:Request, res:Response):void {
        const name = req.body.name;
        const email = req.body.email;
        if (!name || typeof name !== "string" || !email || typeof email !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request: CreateUserRequest = ({name, email});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(CreateUserUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new UserPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getUser(req:Request, res:Response):void {
        const userID = req.params.id;
        if (!userID || typeof userID !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request: GetUserRequest = ({id: userID});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetUserUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new UserPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    },

    getAllUsers(req:Request, res:Response):void {
        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(GetAllUsersUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new UserPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute({});
    },

    updateName(req:Request, res:Response):void {
        const userID = req.body.userId;
        const name = req.body.name;
        if (!userID || typeof userID !== "string" || !name || typeof name !== "string") {
            res.status(400).send("Invalid Request");
            return;
        }
        const request:UpdateUserNameRequest = ({id: userID, name});

        // DIコンテナから依存性を解決しUseCaseを生成
        const usecase = container.resolve(UpdateUserNameUseCase);
        // 受け取ったrequestオブジェクトをもとに毎回生成する
        const presenter = new UserPresenter(res);
        // presenterがシングルトン化できないため、生成済みUseCaseに後から注入する
        usecase.setOutputPort(presenter);
        usecase.execute(request);
    }
}
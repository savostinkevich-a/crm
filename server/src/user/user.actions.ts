import UserModel from "./user.models";
import {JWTVerify} from "../_root/utils/jwt";
import {Response} from "express";
import UserListDto from "./dto/user-list.dto";
import GetByIdParams from "./params/get-by-id.params";
import UserDto from "./dto/user.dto";

const UserActions = {
    get: async (token: string, response: Response) => {
        const user = JWTVerify(token)
        if (user)  {
            const users = await UserModel.find().populate("data")
            return new UserListDto(users)
        }

        response.status(401)
        return {}
    },
    getById: async (token: string, params: GetByIdParams, response: Response) => {
        const user = JWTVerify(token)
        if (user) {
            console.log(params)
            const user = await UserModel.findById(params.id).populate('data')
            console.log(user)
            return user ? new UserDto(user) : {}
        }

        response.status(401)
        return {}
    }
}

export default UserActions
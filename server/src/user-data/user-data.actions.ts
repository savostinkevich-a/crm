import UserDataModel from "./user-data.model";
import CreateUserDataInput from "./input/create-user-data.input";
import UpdateUserDataInput from "./input/update-user-data.input";
import {Response} from "express";
import {JWTVerify} from "../_root/utils/jwt";

const UserDataActions = {
    createUserData: async (input: CreateUserDataInput) => {
        const existsData = await UserDataModel.findById(input.user).exec()
        if (existsData) {
            return existsData._id
        }

        const data = new UserDataModel({user: input.user})
        const saved = await data.save()
        return saved._id
    },
    updateUserData: async (input: UpdateUserDataInput, token: string, response: Response) => {
        const user = JWTVerify(token)
        if (token) {
            return UserDataModel.findOneAndUpdate({user: user._id}, input, {returnOriginal: false})
        }

        response.status(401)
        return {}
    }
}

export default UserDataActions
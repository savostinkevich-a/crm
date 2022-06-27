import {Response} from "express";
import RegisterInput from "./input/register.input";
import UserModel from "../user/user.models";
import {hash, compare} from "../_root/utils/bcrypt";
import AuthDto from "./dto/auth.dto";
import LoginInput from "./input/login.input";
import {JWTSignAccess, JWTVerify} from "../_root/utils/jwt";
import jwt from "jsonwebtoken";
import UserDto from "../user/dto/user.dto";

const AuthActions = {
    register: async (input: RegisterInput) => {
        const checkUserUsername = await UserModel.findOne({username: input.username}).exec()
        if (checkUserUsername) {
            return {code: 400, message: `Username ${input.username} is unavailable`}
        }

        const checkUserEmail = await UserModel.findOne({email: input.email}).exec()
        if (checkUserEmail) {
            return {code: 400, message: `User with email ${input.email} is already exists`}
        }

        const hashedPassword = hash(input.password)
        const user = new UserModel({...input, password: hashedPassword})
        await user.save()

        return new AuthDto(user)
    },

    login: async (input: LoginInput, response: Response) => {
        const user = await UserModel.findOne({username: input.username}).exec()
        if (user) {
            const comparePassword = compare(input.password, user.password)
            if (comparePassword) {
                const token = JWTSignAccess({
                    _id: user._id,
                    username: user.username
                })
                response.cookie("token", token, {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
                return new AuthDto(user)
            }
        }

        return {code: 400, message: "Invalid auth data"}
    },
    me: async (token: string) => {
        console.log(token)
        const userJWT = JWTVerify(token)
        console.log(userJWT)
        if (userJWT) {
            try {
                const user = await UserModel.findById(userJWT._id).exec()
                return new UserDto(user)
            } catch (e) {}
        }

        return {code: 401}
    }

}

export default AuthActions
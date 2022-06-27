import RegisterInput from "./input/register.input";
import UserModel from "../user/user.models";
import {hash, compare} from "../_root/utils/bcrypt";
import AuthDto from "./dto/auth.dto";
import LoginInput from "./input/login.input";


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

    login: async (input: LoginInput) => {
        const user = await UserModel.findOne({username: input.username}).exec()
        if (user) {
            const comparePassword = compare(input.password, user.password)
            if (comparePassword) {
                return new AuthDto(user)
            }
        }

        return {code: 400, message: "Invalid auth data"}
    }
}

export default AuthActions
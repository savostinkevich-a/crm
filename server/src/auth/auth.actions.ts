import RegisterInput from "./input/register.input";
import UserModel from "../user/user.models";
import {hash, compare} from "../_root/utils/bcrypt";
import AuthDto from "./dto/auth.dto";
import UserDataActions from "../user-data/user-data.actions";
import LoginInput from "./input/login.input";


const AuthActions = {
    register: async (input: RegisterInput) => {
        const checkUser = await UserModel.findOne({username: input.username}).exec()
        if (checkUser) {
            return {message: `Username ${input.username} is unavailable`}
        }

        const hashedPassword = hash(input.password)
        const user = new UserModel({username: input.username, password: hashedPassword})
        const saved = await user.save()
        const data = await UserDataActions.createUserData({user: saved._id})
        await UserModel.findOneAndUpdate({_id: saved._id}, {data})

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

        return {message: "Invalid auth data"}
    }
}

export default AuthActions
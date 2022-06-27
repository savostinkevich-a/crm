import IUser from "../../_root/models/IUser";
import {Types} from "mongoose"

class UserDto {

    _id: Types.ObjectId
    username: string
    email: string;
    firstName?: string
    lastName?: string
    avatar?: string

    constructor(user: IUser) {
        this._id = user._id
        this.username = user.username
        this.email = user.email
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.avatar = user.avatar
    }
}

export default UserDto
import IUserData from "../../_root/models/IUserData";
import IUser from "../../_root/models/IUser";
import {Types} from "mongoose"
import UserDataDto from "../../user-data/dto/user-data.dto";

class UserDto {

    _id: Types.ObjectId
    username: string
    data?: UserDataDto

    constructor(user: IUser) {
        this._id = user._id
        this.username = user.username
        console.log(user.data)
        if (user.data && !(user.data instanceof Types.ObjectId)) {
            this.data = new UserDataDto(user.data)
        }
    }
}

export default UserDto
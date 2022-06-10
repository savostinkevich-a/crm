import IUser from "../../_root/models/IUser";
import {JWTSignAccess} from "../../_root/utils/jwt";
import {Types} from "mongoose";

class AuthDto {

    _id: Types.ObjectId
    username: string
    token: string

    constructor(user: IUser) {
        this._id = user._id
        this.username = user.username
        this.token = JWTSignAccess({
            _id: this._id,
            username: this.username
        })
    }
}

export default AuthDto
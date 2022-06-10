import {Types} from "mongoose";

interface IUserData {
    _id: Types.ObjectId
    user: Types.ObjectId
    firstName?: string
    lastName?: string
    avatar?: string
}

export default IUserData
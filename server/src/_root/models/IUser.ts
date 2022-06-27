import {Types} from "mongoose";

interface IUser {
    _id: Types.ObjectId
    email: string
    username: string
    password: string
    firstName?: string
    lastName?: string
    avatar?: string
}

export default IUser
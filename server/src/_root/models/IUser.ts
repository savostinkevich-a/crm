import IUserData from "./IUserData";
import {Types} from "mongoose";

interface IUser {
    _id: Types.ObjectId
    username: string
    password: string
    data: Types.ObjectId | IUserData
}

export default IUser
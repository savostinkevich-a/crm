import {model, Schema} from "mongoose";
import IUser from "../_root/models/IUser";

const UserSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    avatar: {type: String},
})

const UserModel = model("User", UserSchema)

export default UserModel
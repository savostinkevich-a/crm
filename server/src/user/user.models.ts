import {model, Schema} from "mongoose";
import IUser from "../_root/models/IUser";

const UserSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    data: {
        type: Schema.Types.ObjectId,
        ref: "UserData"
    }
})

const UserModel = model("User", UserSchema)

export default UserModel
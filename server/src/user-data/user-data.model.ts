import {model, Schema} from "mongoose";
import IUserData from "../_root/models/IUserData";

const UserDataSchema = new Schema<IUserData>({
    firstName: {type: String},
    lastName: {type: String},
    avatar: {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const UserDataModel = model("UserData", UserDataSchema)

export default UserDataModel
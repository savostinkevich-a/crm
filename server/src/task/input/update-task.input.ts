import {Types} from "mongoose";

interface UpdateTaskInput {
    _id: Types.ObjectId
    title?: string
    description?: string
    tasking?: Types.ObjectId
    performer?: Types.ObjectId
}

export default UpdateTaskInput
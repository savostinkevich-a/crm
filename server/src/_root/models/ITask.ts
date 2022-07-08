import {Types} from "mongoose";

interface ITask {
    _id: Types.ObjectId
    tasking: Types.ObjectId
    performer: Types.ObjectId
    title: string
    description?: string
    deadline?: Date
}

export default ITask
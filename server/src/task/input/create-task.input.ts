import {Types} from "mongoose";

interface CreateTaskInput {
    title: string
    description?: string
    tasking: Types.ObjectId
    performer: Types.ObjectId
    deadline?: Date
}

export default CreateTaskInput
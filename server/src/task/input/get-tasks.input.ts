import {Types} from "mongoose";

interface GetTasksInput {
    performer?: Types.ObjectId
    tasking?: Types.ObjectId
}

export default GetTasksInput
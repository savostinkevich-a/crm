import {model, Schema} from "mongoose";
import ITask from "../_root/models/ITask";

const TaskSchema = new Schema<ITask>({
    tasking: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    performer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {type: String, required: true},
    description: {type: String}
})

const TaskModel = model("Task", TaskSchema)

export default TaskModel
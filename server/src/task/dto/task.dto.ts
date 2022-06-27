import ITask from "../../_root/models/ITask";
import {Types} from "mongoose";

class TaskDto implements ITask {

    _id: Types.ObjectId;
    description?: string;
    performer: Types.ObjectId;
    tasking: Types.ObjectId;
    title: string;

    constructor(task: ITask) {
        this._id = task._id
        this.title = task.title
        if (task.description) {
            this.description = task.description
        }

        this.performer = task.performer
        this.tasking = task.tasking
    }

}

export default TaskDto
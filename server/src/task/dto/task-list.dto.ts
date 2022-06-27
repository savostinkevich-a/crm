import TaskDto from "./task.dto";
import ITask from "../../_root/models/ITask";

class TaskListDto {
    tasks: Array<TaskDto>
    count: number

    constructor(tasks: Array<ITask>, count: number) {
        this.count = count
        this.tasks = tasks.map((task) => {
            return new TaskDto(task)
        })
    }
}

export default TaskListDto
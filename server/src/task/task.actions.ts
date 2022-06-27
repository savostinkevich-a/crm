import CreateTaskInput from "./input/create-task.input";
import TaskModel from "./task.model";
import TaskDto from "./dto/task.dto";
import GetTasksInput from "./input/get-tasks.input";
import TasksPaginationQuery from "./query/tasks-pagination.query";
import TaskListDto from "./dto/task-list.dto";
import GetByIdParams from "./params/get-by-id.params";

/*TODO create auth check*/
const TaskActions = {
    get: async (input: GetTasksInput, query: TasksPaginationQuery) => {

        const page: number = query.page || 1
        const size: number = query.size || 10

        const skip = (page - 1) * size

        const count = await TaskModel.find(input).count()
        const tasks = await TaskModel.find(input)
            .skip(skip)
            .limit(size)
            .populate("tasking", ["-password", "-__v"])
            .populate("performer",["-password", "-__v"])
            .exec()
        return new TaskListDto(tasks, count)
    },
    getById: async (params: GetByIdParams) => {
        try {
            const task = await TaskModel.findById(params.id)
                .populate("tasking", ["-password", "-__v"])
                .populate("performer",["-password", "-__v"])
                .exec()

            return new TaskDto(task)

        } catch (e) {
            return {
                "code": 404,
                "error": `Task is not exists`
            }
        }

    },
    create: async (input: CreateTaskInput) => {
        const task = new TaskModel(input)
        await task.save()
        return new TaskDto(task)
    }
}

export default TaskActions
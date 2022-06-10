import {SetAsPerformerTasksAction, SetAsTaskingTasksAction, SetTasksFetchingAction, TasksActionTypes} from "./types";
import ITask from "../../models/ITask";

const TasksActionCreator = {
    setTasksFetching: (isFetching: boolean): SetTasksFetchingAction  => (
        {type: TasksActionTypes.SET_TASKS_FETCHING, payload: isFetching}
    ),
    setAsPerformerTasks: (tasks: Array<ITask>): SetAsPerformerTasksAction => (
        {type: TasksActionTypes.SET_AS_PERFORMER_TASKS, payload: tasks}
    ),
    setAsTaskingTasks: (tasks: Array<ITask>): SetAsTaskingTasksAction => (
        {type: TasksActionTypes.SET_AS_TASKING_TASKS, payload: tasks}
    )
}

export default TasksActionCreator
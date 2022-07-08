import {SetTaskListAction, SetTaskListCountAction, SetTaskListFetchingAction, TaskListActionTypes} from "./types";
import {ITask} from "../../models/ITask";

const TaskListActionCreator = {
    setTaskListFetching: (fetching: boolean): SetTaskListFetchingAction => (
        {type: TaskListActionTypes.SET_TASK_LIST_FETCHING, payload: fetching}
    ),
    setTaskList: (taskList: Array<ITask>): SetTaskListAction => (
        {type: TaskListActionTypes.SET_TASK_LIST, payload: taskList}
    ),
    setTaskListCount: (count: number): SetTaskListCountAction => (
        {type: TaskListActionTypes.SET_TASK_LIST_COUNT, payload: count}
    )
}

export default TaskListActionCreator
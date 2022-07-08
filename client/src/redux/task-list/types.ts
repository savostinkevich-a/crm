import {ITask} from "../../models/ITask";

export interface TaskListState {
    isFetching: boolean
    list: Array<ITask>
    count: number
}

export enum TaskListActionTypes {
    SET_TASK_LIST_FETCHING = "SET_TASK_LIST_FETCHING",
    SET_TASK_LIST = "SET_TASK_LIST",
    SET_TASK_LIST_COUNT = "SET_TASK_LIST_COUNT",
}

export interface SetTaskListFetchingAction {
    type: TaskListActionTypes.SET_TASK_LIST_FETCHING
    payload: boolean
}

export interface SetTaskListAction {
    type: TaskListActionTypes.SET_TASK_LIST
    payload: Array<ITask>
}

export interface SetTaskListCountAction {
    type: TaskListActionTypes.SET_TASK_LIST_COUNT
    payload: number
}

export type TaskListActions =
    SetTaskListFetchingAction |
    SetTaskListAction |
    SetTaskListCountAction
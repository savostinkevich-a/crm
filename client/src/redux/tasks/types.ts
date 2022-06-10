import ITask from "../../models/ITask";

export interface TasksState {
    asPerformer: Array<ITask>
    asTasking: Array<ITask>
    isFetching: boolean
}

export enum TasksActionTypes {
    SET_TASKS_FETCHING = "SET_TASKS_FETCHING",
    SET_AS_PERFORMER_TASKS = "SET_AS_PERFORMER_TASKS",
    SET_AS_TASKING_TASKS = "SET_AS_TASKING_TASKS",
}

export interface SetTasksFetchingAction {
    type: TasksActionTypes.SET_TASKS_FETCHING
    payload: boolean
}

export interface SetAsPerformerTasksAction {
    type: TasksActionTypes.SET_AS_PERFORMER_TASKS
    payload: Array<ITask>
}

export interface SetAsTaskingTasksAction {
    type: TasksActionTypes.SET_AS_TASKING_TASKS
    payload: Array<ITask>
}

export type TasksAction =
    SetTasksFetchingAction |
    SetAsPerformerTasksAction |
    SetAsTaskingTasksAction
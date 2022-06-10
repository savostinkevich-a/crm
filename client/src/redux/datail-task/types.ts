import ITask from "../../models/ITask";

export interface DetailTaskState {
    data: ITask
    isFetching: boolean
}

export enum DetailTaskActionTypes {
    SET_DETAIL_TASK_FETCHING = "SET_DETAIL_TASK_FETCHING",
    SET_DETAIL_TASK_DATA = "SET_DETAIL_TASK_DATA"
}

export interface SetDetailTaskFetchingAction {
    type: DetailTaskActionTypes.SET_DETAIL_TASK_FETCHING
    payload: boolean
}

export interface SetDetailTaskDataAction {
    type: DetailTaskActionTypes.SET_DETAIL_TASK_DATA
    payload: ITask
}

export type DetailTaskAction =
    SetDetailTaskFetchingAction |
    SetDetailTaskDataAction
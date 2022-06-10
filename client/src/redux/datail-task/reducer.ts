import {DetailTaskAction, DetailTaskActionTypes, DetailTaskState} from "./types";
import ITask from "../../models/ITask";

const initialState: DetailTaskState = {
    isFetching: true,
    data: {} as ITask
}

export default function detailTaskReducer(state: DetailTaskState = initialState, action: DetailTaskAction): DetailTaskState {
    switch (action.type) {
        case DetailTaskActionTypes.SET_DETAIL_TASK_FETCHING: return {...state, isFetching: action.payload}
        case DetailTaskActionTypes.SET_DETAIL_TASK_DATA: return {...state, data: action.payload}
        default: return state
    }
}
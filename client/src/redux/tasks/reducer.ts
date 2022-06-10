import {TasksAction, TasksActionTypes, TasksState} from "./types";

const initialState: TasksState = {
    isFetching: false,
    asPerformer: [],
    asTasking: []
}

export default function tasksReducer(state: TasksState = initialState, action: TasksAction): TasksState {
    switch (action.type) {
        case TasksActionTypes.SET_TASKS_FETCHING: return {...state, isFetching: action.payload}
        case TasksActionTypes.SET_AS_PERFORMER_TASKS: return {...state, asPerformer: action.payload}
        case TasksActionTypes.SET_AS_TASKING_TASKS: return {...state, asTasking: action.payload}
        default: return state
    }
}
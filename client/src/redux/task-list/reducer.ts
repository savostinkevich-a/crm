import {TaskListActions, TaskListActionTypes, TaskListState} from "./types";

const initialState: TaskListState = {
    isFetching: true,
    list: [],
    count: 0
}

const taskListReducer = (state: TaskListState = initialState, action: TaskListActions): TaskListState => {
    switch (action.type) {
        case TaskListActionTypes.SET_TASK_LIST_FETCHING: return {...state, isFetching: action.payload}
        case TaskListActionTypes.SET_TASK_LIST: return {...state, list: action.payload}
        case TaskListActionTypes.SET_TASK_LIST_COUNT: return {...state, count: action.payload}
        default: return state
    }
}

export default taskListReducer
import auth from "./auth/reducer"
import tasks from "./tasks/reducer"
import detailTask from "./datail-task/reducer"
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth, tasks, detailTask
})

export default rootReducer
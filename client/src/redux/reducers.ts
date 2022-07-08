import {combineReducers} from "@reduxjs/toolkit";
import auth from "./auth/reducer";
import taskList from "./task-list/reducer";
import chat from "./chat/reducer";

export const rootReducer = combineReducers({
    auth, taskList, chat
})
import {combineReducers} from "@reduxjs/toolkit";
import auth from "./auth/reducer";

export const rootReducer = combineReducers({
    auth
})
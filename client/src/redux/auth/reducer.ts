import {AuthActions, AuthState, UserActionTypes} from "./types";
import {IUser} from "../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    isFetching: true,
    user: {} as IUser,
    errors: ""
}

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case UserActionTypes.SET_IS_AUTH: return {...state, isAuth: action.payload}
        case UserActionTypes.SET_IS_AUTH_FETCHING: return {...state, isFetching: action.payload}
        case UserActionTypes.SET_USER: return {...state, user: action.payload}
        case UserActionTypes.SET_AUTH_ERRORS: return {...state, errors: action.payload}
        default: return state
    }
}

export default authReducer
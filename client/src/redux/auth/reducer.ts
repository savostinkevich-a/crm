import {AuthAction, AuthActionTypes, AuthState} from "./types";
import IUser from "../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    isFetching: false,
    user: {} as IUser,
    token: ""
}

export default function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_IS_AUTH: return {...state, isAuth: action.payload}
        case AuthActionTypes.SET_AUTH_FETCHING: return {...state, isFetching: action.payload}
        case AuthActionTypes.SET_USER: return  {...state, user: action.payload}
        case AuthActionTypes.SET_TOKEN: return {...state, token: action.payload}
        default: return state
    }
}
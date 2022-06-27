import {IUser} from "../../models/IUser";

export interface AuthState {
    user: IUser
    isAuth: boolean
    isFetching: boolean
    errors: string
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_IS_AUTH_FETCHING = "SET_IS_AUTH_FETCHING",
    SET_AUTH_ERRORS = "SET_AUTH_ERRORS"
}

export interface SetUserAction  {
    type: UserActionTypes.SET_USER
    payload: IUser
}

export interface SetIsAuthAction {
    type: UserActionTypes.SET_IS_AUTH
    payload: boolean
}

export interface SetIsAuthFetchingAction {
    type: UserActionTypes.SET_IS_AUTH_FETCHING
    payload: boolean
}

export interface SetAuthErrorsAction {
    type: UserActionTypes.SET_AUTH_ERRORS
    payload: string
}

export type AuthActions =
    SetUserAction |
    SetIsAuthAction |
    SetIsAuthFetchingAction |
    SetAuthErrorsAction
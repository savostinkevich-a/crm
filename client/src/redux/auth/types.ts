import IUser from "../../models/IUser";

export interface AuthState {
    isAuth: boolean
    isFetching: boolean
    user: IUser
    token: string
}

export enum AuthActionTypes {
    SET_IS_AUTH = "SET_AUTH",
    SET_AUTH_FETCHING = "SET_AUTH_FETCHING",
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

export interface SetIsAuthAction {
    type: AuthActionTypes.SET_IS_AUTH
    payload: boolean
}

export interface SetAuthFetching {
    type: AuthActionTypes.SET_AUTH_FETCHING
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionTypes.SET_USER
    payload: IUser
}

export interface SetTokenAction {
    type: AuthActionTypes.SET_TOKEN
    payload: string
}


export type AuthAction =
    SetAuthFetching |
    SetIsAuthAction |
    SetUserAction |
    SetTokenAction
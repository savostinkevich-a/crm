import {IUser} from "../../models/IUser";

export interface UsersState {
    isUsersFetching: boolean
    users: Array<IUser>
}

export enum UsersActionTypes {
    SET_IS_USERS_FETCHING = "SET_IS_USERS_FETCHING",
    SET_USER_LIST = "SET_USER_LIST"
}

export interface SetIsUsersFetchingAction {
    type: UsersActionTypes.SET_IS_USERS_FETCHING
    payload: boolean
}

export interface SetUserListAction {
    type: UsersActionTypes.SET_USER_LIST
    payload: Array<IUser>
}

export type UsersActions =
    SetIsUsersFetchingAction |
    SetUserListAction
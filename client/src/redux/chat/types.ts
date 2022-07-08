import {IUser} from "../../models/IUser";

export interface ChatState {
    isListFetching: boolean
    users: Array<IUser>
}

export enum ChatActionTypes {
    SET_CHAT_LIST_FETCHING = "SET_CHAT_LIST_FETCHING",
    SET_CHAT_USER_LIST = "SET_CHAT_USERS_LIST"
}

export interface SetChatListFetchingAction {
    type: ChatActionTypes.SET_CHAT_LIST_FETCHING
    payload: boolean
}

export interface SetChatUserListAction {
    type: ChatActionTypes.SET_CHAT_USER_LIST
    payload: Array<IUser>
}

export type ChatActions =
    SetChatListFetchingAction |
    SetChatUserListAction

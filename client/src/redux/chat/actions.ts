import {ChatActionTypes, SetChatListFetchingAction, SetChatUserListAction} from "./types";
import {IUser} from "../../models/IUser";

const ChatActionCreator = {
    setChatListFetching: (fetching: boolean): SetChatListFetchingAction => (
        {type: ChatActionTypes.SET_CHAT_LIST_FETCHING, payload: fetching}
    ),
    setChatUserList: (users: Array<IUser>): SetChatUserListAction => (
        {type: ChatActionTypes.SET_CHAT_USER_LIST, payload: users}
    )
}

export default ChatActionCreator
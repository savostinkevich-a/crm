import {ChatActions, ChatActionTypes, ChatState} from "./types";

const initialState: ChatState = {
    isListFetching: true,
    users: []
}

const charReducer = (state: ChatState = initialState, action: ChatActions): ChatState => {
    switch (action.type) {
        case ChatActionTypes.SET_CHAT_LIST_FETCHING: return {...state, isListFetching: action.payload}
        case ChatActionTypes.SET_CHAT_USER_LIST: return {...state, users: action.payload}
        default: return state
    }
}

export default charReducer
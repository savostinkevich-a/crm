import {UsersActions, UsersActionTypes, UsersState} from "./types";

const initialState: UsersState = {
    users: [],
    isUsersFetching: false
}

const usersReducer = (state: UsersState = initialState, action: UsersActions): UsersState => {
    switch (action.type) {
        case UsersActionTypes.SET_IS_USERS_FETCHING: return {...state, isUsersFetching: action.payload}
        case UsersActionTypes.SET_USER_LIST: return {...state, users: action.payload}
        default: return state
    }
}

export default usersReducer
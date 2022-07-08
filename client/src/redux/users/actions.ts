import {SetIsUsersFetchingAction, SetUserListAction, UsersActionTypes} from "./types";
import {IUser} from "../../models/IUser";

const UsersActionCreator = {
    setUsersFetching: (fetching: boolean): SetIsUsersFetchingAction => (
        {type: UsersActionTypes.SET_IS_USERS_FETCHING, payload: fetching}
    ),
    setUserList: (userList: Array<IUser>): SetUserListAction => (
        {type: UsersActionTypes.SET_USER_LIST, payload: userList}
    )
}

export default UsersActionCreator
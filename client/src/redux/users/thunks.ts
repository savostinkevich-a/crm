import {AppDispatch} from "../store";
import UsersActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const UsersThunks = {
    getUsers: () => async (dispatch: AppDispatch) => {
        dispatch(UsersActionCreator.setUsersFetching(true))
        try {
            const response = await AxiosActions.getUserList()
            dispatch(UsersActionCreator.setUserList(response.data.users))
        } catch (e) {

        } finally {
            dispatch(UsersActionCreator.setUsersFetching(false))
        }
    }
}

export default UsersThunks
import {AppDispatch} from "../store";
import ChatActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const ChatThunks = {
    getChatUserList: () => async (dispatch: AppDispatch) => {
        dispatch(ChatActionCreator.setChatListFetching(true))
        try {
            const response = await AxiosActions.getUserList()
            dispatch(ChatActionCreator.setChatUserList(response.data.users))
        } catch (e) {

        } finally {
            dispatch(ChatActionCreator.setChatListFetching(false))
        }
    }
}

export default ChatThunks
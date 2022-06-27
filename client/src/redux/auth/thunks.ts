import {AppDispatch} from "../store";
import AuthActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const AuthThunks = {
    me: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreator.setIsAuthFetching(true))
        const response = await AxiosActions.me()
        if (response.status !== 200) {
            dispatch(AuthActionCreator.setAuthErrors("Error"))
        } else {
            dispatch(AuthActionCreator.setIsAuth(true))
            dispatch(AuthActionCreator.setAuthErrors(""))
            dispatch(AuthActionCreator.setUser(response.data))
        }
        dispatch(AuthActionCreator.setIsAuthFetching(false))
    }
}

export default AuthThunks
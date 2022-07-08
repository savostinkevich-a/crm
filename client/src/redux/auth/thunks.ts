import {AppDispatch} from "../store";
import AuthActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const AuthThunks = {
    me: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreator.setIsAuthFetching(true))

        try {
            const response = await AxiosActions.me()
            dispatch(AuthActionCreator.setIsAuth(true))
            dispatch(AuthActionCreator.setAuthErrors(""))
            dispatch(AuthActionCreator.setUser(response.data))
        } catch (e) {
            dispatch(AuthActionCreator.setAuthErrors("Error"))
        } finally {
            dispatch(AuthActionCreator.setIsAuthFetching(false))
        }
    }
}

export default AuthThunks
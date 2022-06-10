import AuthDto from "./dto/AuthDto";
import {AppDispatch} from "../store";
import AuthActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";
import IUser from "../../models/IUser";

const AuthThunks = {
    me: () => async (dispatch: AppDispatch) => {
        const token = localStorage.getItem("token")
        if (token) {
            const response = await AxiosActions.me(token)
            console.log(response)
            const user: IUser = {
                login: response.data.login,
                _id: response.data._id
            }
            console.log(user)
            dispatch(AuthActionCreator.setIsAuth(true))
            dispatch(AuthActionCreator.setUser(user))
            dispatch(AuthActionCreator.setToken(token))
        }
    },
    login: (authData: AuthDto) => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreator.setIsFetching(true))

        const response = await AxiosActions.login(authData)
        if (response.data) {
            const user: IUser = {
                login: response.data.user.login,
                _id: response.data.user._id
            }

            localStorage.setItem("token", response.data.token)
            dispatch(AuthActionCreator.setIsAuth(true))
            dispatch(AuthActionCreator.setUser(user))
            dispatch(AuthActionCreator.setToken(response.data.token))
        }

        dispatch(AuthActionCreator.setIsFetching(false))
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("token")
        dispatch(AuthActionCreator.setIsAuth(false))
        dispatch(AuthActionCreator.setUser({} as IUser))
        dispatch(AuthActionCreator.setToken(""))
    }
}

export default AuthThunks
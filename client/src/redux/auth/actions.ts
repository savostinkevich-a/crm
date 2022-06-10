import {AuthActionTypes, SetAuthFetching, SetIsAuthAction, SetTokenAction, SetUserAction} from "./types";
import IUser from "../../models/IUser";

const AuthActionCreator = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => (
        {type: AuthActionTypes.SET_IS_AUTH, payload: isAuth}
    ),
    setIsFetching: (isFetching: boolean): SetAuthFetching => (
        {type: AuthActionTypes.SET_AUTH_FETCHING, payload: isFetching}
    ),
    setUser: (user: IUser): SetUserAction => (
        {type: AuthActionTypes.SET_USER, payload: user}
    ),
    setToken: (token: string): SetTokenAction => (
        {type: AuthActionTypes.SET_TOKEN, payload: token}
    ),

}

export default AuthActionCreator
import {SetAuthErrorsAction, SetIsAuthAction, SetIsAuthFetchingAction, SetUserAction, UserActionTypes} from "./types";
import {IUser} from "../../models/IUser";

const AuthActionCreator = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => (
        {type: UserActionTypes.SET_IS_AUTH, payload: isAuth}
    ),
    setIsAuthFetching: (isFetching: boolean): SetIsAuthFetchingAction => (
        {type: UserActionTypes.SET_IS_AUTH_FETCHING, payload: isFetching}
    ),
    setUser: (user: IUser): SetUserAction => (
        {type: UserActionTypes.SET_USER, payload: user}
    ),
    setAuthErrors: (errors: string): SetAuthErrorsAction => (
        {type: UserActionTypes.SET_AUTH_ERRORS, payload: errors}
    )
}

export default AuthActionCreator
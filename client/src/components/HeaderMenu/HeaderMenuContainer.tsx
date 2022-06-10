import React from 'react';
import HeaderMenu from "./HeaderMenu";
import {useAppSelector} from "../../hooks/useAppSelector";
import AuthThunks from "../../redux/auth/thunks";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const HeaderMenuContainer = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const logout = () => {
        dispatch(AuthThunks.logout())
    }

    return (
        <HeaderMenu user={user} isAuth={isAuth} logout={logout}/>
    );
};

export default HeaderMenuContainer;
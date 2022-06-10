import React, {useEffect} from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import AuthThunks from "../redux/auth/thunks";
import TaskPage from "../pages/TaskPage/TaskPage";

const AppRouter = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        dispatch(AuthThunks.me())
    }, [dispatch])

    return (
        <Routes>
            { isAuth ?
                <>
                    <Route path={"/"} element={<DashboardPage/>}/>
                    <Route path={"/task/:id"} element={<TaskPage/>}/>
                    <Route path={"/login"} element={<Navigate to={"/"}/>}/>
                </>
                :
                <>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/"} element={<Navigate to={"/login"}/>}/>
                </>}
        </Routes>
    );
};

export default AppRouter;
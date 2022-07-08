import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import {Layout} from "antd";
import SideMenu from "../components/SideMenu/SideMenu";
import LoginPage from "../pages/LoginPage/LoginPage";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import AuthThunks from "../redux/auth/thunks";
import ChatPage from "../pages/ChatPage/ChatPage";

const AppRouter = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const isFetching = useAppSelector(state => state.auth.isFetching)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(AuthThunks.me())
    }, [dispatch])

    if (isFetching) {
        return <></>
    }

    return (
        <>
            {isAuth ?
                    <>
                        <Layout.Sider width={240} className="site-layout-background">
                            <SideMenu/>
                        </Layout.Sider>
                        <Routes>
                            <Route path="/dashboard" element={<DashboardPage />}/>
                            <Route path="/chat" element={<ChatPage />}/>
                            <Route path="/" element={<DashboardPage />}/>
                            <Route path="*" element={<Navigate to={"/"}/>}/>
                        </Routes>
                    </>
                    :
                    <>
                        <Routes>
                            <Route path="/login" element={<LoginPage />}/>
                            <Route path="/register" element={<LoginPage />}/>
                            <Route path="*" element={<Navigate to={"/login"} />}/>
                        </Routes>
                    </>
            }
        </>

    );
};

export default AppRouter;
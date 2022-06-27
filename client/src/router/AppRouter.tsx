import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import {Layout} from "antd";
import SideMenu from "../components/SideMenu/SideMenu";
import LoginPage from "../pages/LoginPage/LoginPage";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import AuthThunks from "../redux/auth/thunks";

const AppRouter = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const isFetching = useAppSelector(state => state.auth.isFetching)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(AuthThunks.me())
    }, [])

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
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/home" element={<HomePage />}/>
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
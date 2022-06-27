import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import {Layout} from "antd";
import SideMenu from "../components/SideMenu/SideMenu";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRouter = () => {

    const isAuth = false

    return (
        <>
            {
                isAuth ?
                    <>
                        <Layout.Sider width={240} className="site-layout-background">
                            <SideMenu/>
                        </Layout.Sider>
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
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
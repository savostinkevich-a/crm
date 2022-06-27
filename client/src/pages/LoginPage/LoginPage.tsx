import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import {useLocation} from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = () => {

    const location = useLocation();

    return (
        <div>
            {
                location.pathname == "/login" && <LoginForm/>
            }
            {
                location.pathname == "/register" && <RegisterForm/>
            }
        </div>
    );
};

export default LoginPage;
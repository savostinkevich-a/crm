import React, {FC} from "react";
import AxiosActions from "../axios/AxiosActions";

const withAuthRoutes = (Component: FC) => {

    const Auth: FC = () => {



        return <Component/>
    }

    return Auth
}

export default withAuthRoutes
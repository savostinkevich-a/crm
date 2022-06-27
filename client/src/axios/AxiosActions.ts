import axios, {AxiosResponse} from "axios"
import {MeResponse} from "./Response";

const AxiosActions = {
    instance: axios.create({
        baseURL: "http://localhost:5000/",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }),
    login: (authData: {username: string, password: string}) => {
        console.log(authData)
        return AxiosActions.instance.post("auth/login", authData)
    },
    me: (): Promise<AxiosResponse<MeResponse>> => {
        return AxiosActions.instance.get("auth/me")
    }

}

export default AxiosActions
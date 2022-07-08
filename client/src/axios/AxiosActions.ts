import axios, {AxiosResponse} from "axios"
import {MeResponse, TaskListResponse, UserListResponse} from "./Response";
import {TaskListParams} from "./params/TaskListParams";

const AxiosActions = {
    instance: axios.create({
        baseURL: "http://localhost:5000/",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }),
    /*auth*/
    login: (authData: {username: string, password: string}) => {
        console.log(authData)
        return AxiosActions.instance.post("auth/login", authData)
    },
    me: (): Promise<AxiosResponse<MeResponse>> => {
        return AxiosActions.instance.get("auth/me")
    },
    /*tasks*/
    getTaskList: (params: TaskListParams): Promise<AxiosResponse<TaskListResponse>> => {
        let {page, size, ...filter} = params
        return AxiosActions.instance.post(`task?page=${page}&size=${size}`, filter)
    },
    /*users*/
    getUserList: (): Promise<AxiosResponse<UserListResponse>> => {
        return AxiosActions.instance.get("user")
    }

}

export default AxiosActions
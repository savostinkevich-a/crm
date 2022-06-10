import axios from "axios"
import AuthDto from "../redux/auth/dto/AuthDto";
import {LoginResponse, MeResponse, TasksResponse} from "./Response";
import AsPerformerTasksInput from "../redux/tasks/dto/AsPerformerTasksInput";
import AsTaskingTasksInput from "../redux/tasks/dto/AsTaskingTasksInput";
import IUser from "../models/IUser";
import NewTaskInput from "../redux/tasks/dto/NewTaskInput";
import ITask from "../models/ITask";
import DetailTaskInput from "../redux/datail-task/dto/DetailTaskInput";

const AxiosActions = {
    instance: axios.create({
        baseURL: "http://localhost:5000/",
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    login: (authData: AuthDto) => {
        return AxiosActions.instance.post<LoginResponse>("user/login", authData)
    },
    me: (token: string) => {
        return AxiosActions.instance.get<MeResponse>("user/me", {
            headers: {"Authorization": `Bearer ${token}`}
        })
    },
    asPerformerTasks: (input: AsPerformerTasksInput) => {
        return AxiosActions.instance.post<TasksResponse>("task", input)
    },
    asTaskingTasks: (input: AsTaskingTasksInput) => {
        return AxiosActions.instance.post<TasksResponse>("task", input)
    },
    users: () => {
        return AxiosActions.instance.get<Array<IUser>>("user")
    },
    createTask: (input: NewTaskInput) => {
        return AxiosActions.instance.post<ITask>("task/create", input)
    },
    getDetailTask: (input: DetailTaskInput) => {
        return AxiosActions.instance.get<ITask>("/task/" + input._id)
    }
}

export default AxiosActions
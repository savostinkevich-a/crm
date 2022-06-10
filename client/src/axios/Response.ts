import ITask from "../models/ITask";

export interface LoginResponse {
    user: {
        _id: string
        login: string
        password: string
    },
    token: string
}

export interface MeResponse {
    _id: string
    login: string
    password: string
}

export type TasksResponse = Array<ITask>
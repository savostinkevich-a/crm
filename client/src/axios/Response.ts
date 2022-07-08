import {IUser} from "../models/IUser";
import {ITask} from "../models/ITask";

export interface MeResponse extends IUser {}

export interface TaskListResponse {
    tasks: Array<ITask>
    count: number
}

export interface UserListResponse {
    users: Array<IUser>
}
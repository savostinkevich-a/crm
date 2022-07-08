import {IUser} from "./IUser";

export interface ITask {
    _id: string
    title: string
    description: string
    performer: IUser
    tasking: IUser
    deadline?: Date
}

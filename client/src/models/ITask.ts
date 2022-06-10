import IUser from "./IUser";

interface ITask {
    _id: string
    title: string
    description?: string
    date?: Date
    performer: IUser
    tasking: IUser
}

export default ITask
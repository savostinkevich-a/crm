import {IUser} from "../../models/IUser";

export class CreateTaskListParams {
    public title: string
    public description?: string
    public performer: string
    public tasking: string
    public deadline?: Date

    constructor(values: any, user: IUser) {
        this.title = values.title
        this.performer = values.performer
        this.tasking = user._id

        if (values.description) {
            this.description = values.description
        }

        if (values.deadline) {
            this.deadline = values.deadline.toDate();
        }

    }
}
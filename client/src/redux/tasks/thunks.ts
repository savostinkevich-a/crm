import AsPerformerTasksInput from "./dto/AsPerformerTasksInput";
import {AppDispatch} from "../store";
import TasksActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";
import NewTaskInput from "./dto/NewTaskInput";

const TasksThunks = {
    getAsPerformerTasks: (input: AsPerformerTasksInput) => async (dispatch: AppDispatch) => {
        dispatch(TasksActionCreator.setTasksFetching(true))
        const response = await AxiosActions.asPerformerTasks(input)
        dispatch(TasksActionCreator.setAsPerformerTasks(response.data))
        dispatch(TasksActionCreator.setTasksFetching(false))
    },
    createTask: (input: NewTaskInput) => async (dispatch: AppDispatch) => {
        dispatch(TasksActionCreator.setTasksFetching(true))
        const response = await AxiosActions.createTask(input)
        console.log(response.data)
    }
}

export default TasksThunks
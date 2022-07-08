import {TaskListParams} from "../../axios/params/TaskListParams";
import {AppDispatch} from "../store";
import TaskListActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const TaskListThunks = {
    getTaskList: (params: TaskListParams) => async (dispatch: AppDispatch) => {
        dispatch(TaskListActionCreator.setTaskListFetching(true))
        try {
            const response = await AxiosActions.getTaskList(params)
            dispatch(TaskListActionCreator.setTaskList(response.data.tasks))
            dispatch(TaskListActionCreator.setTaskListCount(response.data.count))
        } catch (e) {

        } finally {
            dispatch(TaskListActionCreator.setTaskListFetching(false))
        }
    }
}

export default TaskListThunks
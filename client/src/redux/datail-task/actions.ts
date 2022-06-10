import {DetailTaskActionTypes, SetDetailTaskDataAction, SetDetailTaskFetchingAction} from "./types";
import ITask from "../../models/ITask";

const DetailTaskActionCreator = {
    setIsFetching: (isFetching: boolean): SetDetailTaskFetchingAction => (
        {type: DetailTaskActionTypes.SET_DETAIL_TASK_FETCHING, payload: isFetching}
    ),
    setData: (task: ITask): SetDetailTaskDataAction => (
        {type: DetailTaskActionTypes.SET_DETAIL_TASK_DATA, payload: task}
    )
}

export default DetailTaskActionCreator
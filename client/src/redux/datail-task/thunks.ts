import DetailTaskInput from "./dto/DetailTaskInput";
import {AppDispatch} from "../store";
import DetailTaskActionCreator from "./actions";
import AxiosActions from "../../axios/AxiosActions";

const DetailTaskThunk = {
    getData: (input: DetailTaskInput) => async (dispatch: AppDispatch) => {
        dispatch(DetailTaskActionCreator.setIsFetching(true))
        const response = await AxiosActions.getDetailTask(input)
        setTimeout(() => {
            dispatch(DetailTaskActionCreator.setData(response.data))
            dispatch(DetailTaskActionCreator.setIsFetching(false))
        }, 1000)

    }
}

export default DetailTaskThunk
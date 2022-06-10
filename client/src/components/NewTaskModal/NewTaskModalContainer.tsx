import React, {useEffect, useState} from 'react';
import NewTaskModal from "./NewTaskModal";
import IUser from "../../models/IUser";
import AxiosActions from "../../axios/AxiosActions";
import {useAppSelector} from "../../hooks/useAppSelector";
import NewTaskInput from "../../redux/tasks/dto/NewTaskInput";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import TasksThunks from "../../redux/tasks/thunks";

interface NewTaskModalContainerProps {
    showModal: boolean
    handleCancel: () => void
}

const NewTaskModalContainer = (props: NewTaskModalContainerProps) => {

    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()

    const [users, setUsers] = useState<Array<IUser>>([])

    useEffect(() => {
        AxiosActions.users().then((response) => {
            setUsers(response.data)
        })
    }, [])

    const createTask = (values: any) => {
        let newTask: NewTaskInput = {
            title: values.title,
            date: values.term.toISOString(true),
            performer: values.performer,
            tasking: user._id,
            description: values.description || ""
        }


        dispatch(TasksThunks.createTask(newTask))
        dispatch(TasksThunks.getAsPerformerTasks({performer: user._id}))
        props.handleCancel()
    }

    return (
        <NewTaskModal showModal={props.showModal} handleCancel={props.handleCancel} users={users} createTask={createTask}/>
    );
};

export default NewTaskModalContainer;
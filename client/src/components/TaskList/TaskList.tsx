import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import TasksThunks from "../../redux/tasks/thunks";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import TaskItem from "../TaskItem/TaskItem";
import {Link} from "react-router-dom";

const TaskList = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.auth.user)
    const tasksAsPerformer = useAppSelector(state => state.tasks.asPerformer)

    useEffect(() => {
        if (user._id) {
            dispatch(TasksThunks.getAsPerformerTasks({performer: user._id}))
        }
    }, [user, dispatch])

    const taskNodes = tasksAsPerformer.map(task => {
        return (
            <li key={task._id}>
                <Link to={"/task/" + task._id}>
                    <TaskItem {...task}/>
                </Link>
            </li>
        )
    })


    return (
        <>
            {
                taskNodes.length ? <ul style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2rem",
                        marginTop: "2rem"
                    }}>
                        {taskNodes}
                    </ul> :
                    <div style={{fontWeight: "bold", fontSize: "1rem"}}>No tasks</div>
            }

        </>

    );
};

export default TaskList;
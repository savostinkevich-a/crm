import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {TaskListParams} from "../../../axios/params/TaskListParams";
import TaskListThunks from "../../../redux/task-list/thunks";
import {Button, List, PageHeader, Pagination} from "antd";
import TaskItem from "./TaskItem";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";


const TaskList = () => {

    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams();
    let navigate = useNavigate();
    const [page, setPage] = useState(searchParams.get("page") || 1)
    const [size, setSize] = useState(searchParams.get("size") || 10)

    const user = useAppSelector(state => state.auth.user)
    const tasks = useAppSelector(state => state.taskList.list)
    const count = useAppSelector(state => state.taskList.count)
    const fetching = useAppSelector(state => state.taskList.isFetching)

    useEffect(() => {
        if (user._id) {
            let params = new TaskListParams()
            params.performer = user._id
            params.page = page
            params.size = size
            dispatch(TaskListThunks.getTaskList(params))
        }
    }, [page, size])

    return (
        <div>
            <PageHeader
                ghost={false}
                title="Tasks"
                extra={[
                    <Button key="1" type="primary">
                        New task
                    </Button>,
                ]}
            ></PageHeader>
            <List
                dataSource={tasks}
                renderItem={item => (
                    <TaskItem key={item._id} item={item}/>
                )}
            />
            <Pagination
                current={typeof page === "string" ?parseInt(page): page}
                total={count}
                showSizeChanger
                pageSize={typeof size === "string" ? parseInt(size) : size}
                showTotal={total => `Total ${total} items`}
                onChange={(page, size) => {
                    navigate({
                        pathname: window.location.pathname,
                        search: `?${createSearchParams({page: page.toString(), size: size.toString()})}`
                    })
                    setPage(page)
                    setSize(size)
                }}
            />
        </div>
    );
};

export default TaskList;
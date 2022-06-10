import React, {useState} from 'react';
import {Button, Modal} from "antd";
import TaskList from "../../components/TaskList/TaskList";
import NewTaskModalContainer from "../../components/NewTaskModal/NewTaskModalContainer";
import { Typography } from 'antd';

const DashboardPage = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const handleShowModal = (show: boolean = !showModal) => {
        setShowModal(show)
    }

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Typography.Title>Dashboard</Typography.Title>
                <Button onClick={() => handleShowModal(true)}>New task</Button>
            </div>

           <TaskList/>

            <NewTaskModalContainer showModal={showModal} handleCancel={handleCancel}/>

        </div>
    );
};

export default DashboardPage;
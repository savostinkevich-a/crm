import {Avatar, Card, List, Space} from 'antd';
import React, {FC} from 'react';
import {ITask} from "../../../models/ITask";
import {PauseCircleFilled, PlayCircleFilled, RightOutlined} from '@ant-design/icons';

export interface TaskItemProps {
    item: ITask
}

const TaskingComponent: FC<ITask> = ({tasking, performer}) => {

    return (
        <>
            <Avatar style={{marginRight: "0.5rem"}}>
                {tasking.firstName && tasking.firstName[0]}
                {tasking.lastName && tasking.lastName[0]}
            </Avatar>
            <RightOutlined />
            <Avatar style={{marginLeft: "0.5rem"}}>
                {performer.firstName && performer.firstName[0]}
                {performer.lastName && performer.lastName[0]}
            </Avatar>
        </>
    )
}

const TaskItem: FC<TaskItemProps> = ({item}) => {
    return (
        <List.Item
            key={item._id}
        >
            <Card
                title={item.title}
                style={{width: "100%"}}
                actions={[
                    <PlayCircleFilled/>,
                    <PauseCircleFilled/>
                ]}
                extra={[
                    <TaskingComponent {...item}/>
                ]}
                hoverable={true}
            >
               <p>{item.description}</p>
            </Card>
        </List.Item>
    );
};

export default TaskItem;
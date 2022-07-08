import {Avatar, Card, Divider, List, Space, Typography} from 'antd';
import React, {FC} from 'react';
import {ITask} from "../../../models/ITask";
import {PauseCircleFilled, PlayCircleFilled, RightOutlined} from '@ant-design/icons';
import moment from "moment";

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

const DeadlineComponent: FC<{deadline: Date}> = ({deadline}) => {
    const date = moment(deadline).format("MMMM Do YYYY");
    return (
        <>
            <Divider/>
            <Typography style={{color: "#555555"}}>Deadline: {date}</Typography>
        </>

    )
}

const TaskItem: FC<TaskItemProps> = ({item}) => {
    return (
        <List.Item>
            <Card
                title={item.title}
                style={{width: "100%"}}
                actions={[
                    <PlayCircleFilled key={1}/>,
                    <PauseCircleFilled key={2}/>
                ]}
                extra={[
                    <TaskingComponent {...item} key={4}/>
                ]}
                hoverable={true}
            >
               <p>{item.description}</p>
                {
                    item.deadline && <DeadlineComponent deadline={item.deadline}/>
                }

            </Card>
        </List.Item>
    );
};

export default TaskItem;
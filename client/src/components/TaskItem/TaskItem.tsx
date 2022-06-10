import React, {CSSProperties} from 'react';
import ITask from "../../models/ITask";
import {Avatar, Card} from "antd";
import moment from 'moment';
import {EditOutlined, EllipsisOutlined, CaretRightOutlined, RightOutlined} from '@ant-design/icons';

interface TaskItemProps extends ITask {
}

const TaskItem = (props: TaskItemProps) => {

    const isOverdue = (): boolean => {
        if (!props.date) return false
        return moment(props.date).isBefore()
    }

    const cardStyles: CSSProperties = {
        minHeight: 120, borderRadius: 8, overflow: "hidden"
    }

    const cardStyleOverdue = {...cardStyles, borderColor: "darkred"}

    return (
        <Card style={isOverdue() ? cardStyleOverdue : cardStyles} hoverable
              title={props.title}
              actions={[
                  <CaretRightOutlined key="start"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>,
              ]}
              extra={props.date ? moment(props.date).format("LLL") : "No terms"}

        >
            <Card.Meta

                description={props.description?.substring(0, 150) || "No description"}
            />
            <div style={{marginTop: "1rem", display: "flex", alignItems: "center"}}>
                <span title={props.tasking.login}>
                        <Avatar size={"small"} alt={props.tasking.login}>{props.tasking.login[0].toUpperCase()}</Avatar>
                </span>

                <RightOutlined style={{margin: "0 0.5rem"}} size={10}/>
                <span title={props.performer.login}>
                <Avatar size={"small"} alt={props.performer.login}>{props.performer.login[0].toUpperCase()}</Avatar>
                </span>
            </div>
        </Card>
    );
};

export default TaskItem;
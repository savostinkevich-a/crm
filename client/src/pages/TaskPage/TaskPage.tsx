import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import DetailTaskInput from "../../redux/datail-task/dto/DetailTaskInput";
import DetailTaskThunk from "../../redux/datail-task/thunks";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Card, Col, Descriptions, Divider, Row, Skeleton, Spin, Typography} from "antd";
import TaskComments from "../../components/TaskComments/TaskComments";
import moment from "moment";
import {LoadingOutlined} from '@ant-design/icons';


const TaskPage = () => {

    const params = useParams();
    const dispatch = useAppDispatch()

    const task = useAppSelector(state => state.detailTask.data)
    const fetching = useAppSelector(state => state.detailTask.isFetching)


    useEffect(() => {
        dispatch(DetailTaskThunk.getData({_id: params.id || ""}))
    }, [params.id])

    return (
        <>
            <Row>
                <Col span={16}>
                    <Card hoverable>


                        <Typography.Title>
                            {fetching ? <Skeleton paragraph={false}/> : task.title}
                        </Typography.Title>
                        <Divider/>
                        <Typography.Paragraph>
                            {fetching ? <Skeleton title={false}/> : task.description || "No description"}
                        </Typography.Paragraph>

                    </Card>
                    <Divider/>
                    <Card hoverable>
                        <Typography.Title level={3}>Comments</Typography.Title>
                        {fetching ? <>
                            <Typography.Title level={4}>
                                No comments
                            </Typography.Title>
                        </> : <TaskComments/>
                        }
                    </Card>
                </Col>
                <Col span={1}/>
                <Col span={7}>
                    <Card style={{height: "100%"}} hoverable>
                        {
                            fetching ?
                                <Skeleton loading={fetching} active>
                                    <Card.Meta
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Skeleton>

                                :

                                <>
                                    <Descriptions column={1}>
                                        <Descriptions.Item
                                            label={<b>Terms</b>}>{task.date ? moment(task.date).format("LLL") : "No terms"}</Descriptions.Item>
                                        <Descriptions.Item
                                            label={<b>Performer</b>}>{task.performer.login}</Descriptions.Item>
                                        <Descriptions.Item
                                            label={<b>Tasking</b>}>{task.tasking.login}</Descriptions.Item>
                                    </Descriptions>
                                </>
                        }
                    </Card>

                </Col>
            </Row>

            <Row>

            </Row>
        </>

    );
};

export default TaskPage;
import React, {FC, useEffect} from 'react';
import {Avatar, DatePicker, Form, Input, Modal, Select} from "antd";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import UsersThunks from "../../../redux/users/thunks";
import TaskListThunks from "../../../redux/task-list/thunks";
import {CreateTaskListParams} from "../../../axios/params/CreateTaskListParams";

interface TaskCreateProps {
    visible: boolean
    setVisible: (visible: boolean) => void
}

const TaskCreate: FC<TaskCreateProps> = ({visible, setVisible}) => {

    const [form] = Form.useForm();
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const user = useAppSelector(state => state.auth.user)

    useEffect(() => {
        if (users.length === 0) {
            dispatch(UsersThunks.getUsers())
        }
    }, [dispatch, users.length])

    const handleSubmit = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                console.log(values)
                let params = new CreateTaskListParams(values, user)
                dispatch(TaskListThunks.createTask(params))
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    return (
        <Modal
            title={"New task"}
            visible={visible}
            onOk={handleSubmit}
            onCancel={() => {setVisible(false)}}
        >
            <Form
                form={form}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{required: true, message: 'Please input task title!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item
                    label="Deadline"
                    name="deadline"
                >
                    <DatePicker showTime/>
                </Form.Item>
                <Form.Item
                    label="Performer"
                    name="performer"
                    rules={[{required: true, message: 'Please select task performer!'}]}
                >
                    <Select
                        showSearch
                        filterOption={(input, option) => (
                            option!.children as unknown as string).toLowerCase().includes(input.toLowerCase()
                        )}
                    >
                        {
                            users.map((user) => {
                                let name = `${user.firstName} ${user.lastName}`
                                return <Select.Option key={user._id} value={user._id}>
                                    {name}
                                </Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TaskCreate;
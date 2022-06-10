import React from 'react';
import {Button, DatePicker, Form, Input, Modal, Select, TimePicker} from "antd";
import IUser from "../../models/IUser";

interface NewTaskModalProps {
    showModal: boolean
    handleCancel: () => void
    users: Array<IUser>
    createTask: (values: any) => void
}

const NewTaskModal = (props: NewTaskModalProps) => {


    return (

        <Modal
            visible={props.showModal}
            title="New task"
            onOk={props.handleCancel}
            onCancel={props.handleCancel}
            footer={[
                <Form.Item key={"submit"} style={{margin: 0}}>
                    <Button type="primary" htmlType="submit" form="new_task_form">
                        Submit
                    </Button>
                </Form.Item>
            ]}
        >

            <Form layout={"vertical"} onFinish={props.createTask} name={'new_task_form'}>
                <Form.Item
                    key={"title"}
                    name={"title"}
                    label={"Title"}
                    rules={[{required: true, message: 'Please input your title!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    key={"description"}
                    name={"description"}
                    label={"Description"}
                >
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item
                    name={"term"}
                    label={"Term"}
                >
                        <DatePicker showTime/>

                </Form.Item>

                <Form.Item
                    key={"performer"}
                    name={"performer"}
                    label={"Performer"}
                >
                    <Select>
                        {props.users.map(user => {
                            return <Select.Option key={user._id} value={user._id}>{user.login}</Select.Option>
                        })}
                    </Select>

                </Form.Item>
            </Form>
        </Modal>

    );
};

export default NewTaskModal;
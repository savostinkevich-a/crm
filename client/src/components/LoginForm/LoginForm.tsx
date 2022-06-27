import React from 'react';
import {Button, Card, Form, Input} from "antd";
import {Link} from "react-router-dom";
import AxiosActions from "../../axios/AxiosActions";

const LoginForm = () => {

    const onSubmit = async (authData: any) => {
        const response = await AxiosActions.login(authData)
        console.log(response.data)
    }

    return (
        <Card title="Sign in" bordered={false} style={{width: 500, margin: "24px auto"}}>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <p style={{textAlign: "center"}}>
                <Link to={"/register"}>Create an account.</Link>
            </p>
        </Card>
    );
};

export default LoginForm;
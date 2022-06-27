import React from 'react';
import {Button, Card, Checkbox, Form, Input} from "antd";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <Card title="Sign in" bordered={false} style={{width: 500, margin: "24px auto"}}>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
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

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
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
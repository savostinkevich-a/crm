import React from 'react';
import {Button, Card, Divider, Form, Input} from "antd";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <Card title="Sign up" bordered={false} style={{width: 500, margin: "24px auto"}}>
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
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Divider/>

                <Form.Item
                    label="First name"
                    name="firstName"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name="lastName"
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <p style={{textAlign: "center"}}>
                <Link to={"/login"}>Already have an account? Sign in.</Link>
            </p>
        </Card>
    );
};

export default RegisterForm;
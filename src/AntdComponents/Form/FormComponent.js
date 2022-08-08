import React from 'react'
import './FormComponent.css'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

function FormComponent() {

    const onFinish = (values) => {
        console.log('Success:', values);
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                className="input-background-outside"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
            >
                <Input 
                    size="large" 
                    className="input-background-inside" 
                    prefix={<UserOutlined className="icon-white" />} 
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item
                className="input-background-outside"
                name="description"
                rules={[
                    {
                    required: true,
                    message: 'Please input your description!',
                    },
                ]}
            >
                <Input.TextArea 
                    size="large" 
                    className="input-background-inside" 
                    prefix={<UserOutlined className="icon-white" />} 
                    placeholder="Description"
                />
            </Form.Item>

            <Form.Item
                className="input-background-outside"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password
                    size="large"
                    className="input-background-inside"
                    prefix={<LockOutlined className="icon-white" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item className='text-center'>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormComponent
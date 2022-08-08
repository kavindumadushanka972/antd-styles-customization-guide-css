import React from 'react'
import FormComponent from '../../AntdComponents/Form/FormComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function FormPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Form Styles Customization 📑</h2>
            <a href="https://ant.design/components/form/" target="_blank" rel="noreferrer">👉 Ant Design Form</a>
            <hr />

            <span className='fw-bold small'>All the input area customizations using css classes are demonstrated here. You can select whatever 
            styles suit to you.</span>

            <div className='mt-4'>
                <FormComponent />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
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

export default FormComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>CardComponent.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* All the below css classes are not from antd. You can choose any classname suits you and apply styles */
                    
/* you can add input field background color using this class */
.input-background-inside {
    background: rgb(150, 153, 207) !important; 
    color: white !important;
}

/* you can add input area color using this class */
.input-background-inside input {
    background: rgba(100, 101, 118) !important; 
    color: white !important;
}

/* background styles for form error messages area when submit */
.input-background-outside {
    background: rgb(46, 49, 116); 
}

/* form prefix icons color customization */
.icon-white {
    color: blue !important;
}`}
                    language={'css'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormPage
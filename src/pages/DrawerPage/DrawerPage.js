import React from 'react'
import DrawerComponent from '../../AntdComponents/Drawer/DrawerComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function DrawerPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Drawer Styles Customization 📥</h2>
            <a href="https://ant.design/components/drawer/" target="_blank" rel="noreferrer">👉 Ant Design Drawer</a>
            <hr />

            <div className='mt-4'>
                <DrawerComponent />
            </div>

            <div className='mt-5'>
                    <h4>JavaScript Code</h4>

                    <div className='code-block mt-3'>
                        <CopyBlock
                        text={`import React, { useState } from 'react';
import './DrawerComponent.css'
import { Drawer, Button } from 'antd'

function DrawerComponent() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>

            <Drawer title="Drawer Title" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default DrawerComponent`}
                        language={'jsx'}
                        theme={dark ? dracula : googlecode }
                        {...{ showLineNumbers, codeBlock }}
                        />
                    </div>
                </div>

                <div className='mt-5'>
                    <h4>CSS Styles</h4>
                    <span className='small fw-bold'>DrawerComponent.css</span>

                    <div className='code-block mt-3'>
                        <CopyBlock
                        text={`/* drawer header styles */
.ant-drawer-header {
    background-color: #1990ff !important;
    border-radius: none !important;
    border-bottom: 1px solid grey !important;
}
    
/* drawer title styles */
.ant-drawer-title {
    color: #fff !important;
}

/* drawer body styles */
.ant-drawer-body {
    background-color: #0f1129 !important;
    color: #fff !important;
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

export default DrawerPage
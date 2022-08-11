import React from 'react'
import ModalComponent from '../../AntdComponents/Modal/ModalComponent'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function ModalPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Modal Styles Customization 🚪</h2>
            <a href="https://ant.design/components/modal/" target="_blank" rel="noreferrer">👉 Ant Design Modal</a>
            <hr />

            <div className='mt-4'>
                <ModalComponent />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React,{ useState } from 'react'
import { Button, Modal } from 'antd'
import './ModalComponent.css'

function ModalComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={() => setIsModalVisible(true)}>Open</Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default ModalComponent`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>ModalComponent.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* Modal Header Styles */
.ant-modal-header {
    background-color: #1a6ead !important;
    border-bottom: 1px solid #001529 !important;
}

/* Modal body styles */
.ant-modal-body { 
    background-color: #0f1129 !important; 
    color: #fff !important;
}

/* Modal Footer Styles */
.ant-modal-footer {
    background-color: #2a2e61 !important;
    border-top: 1px solid #001529 !important;
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

export default ModalPage
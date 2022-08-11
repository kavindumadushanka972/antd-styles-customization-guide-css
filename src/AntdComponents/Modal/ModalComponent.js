import React,{ useState } from 'react'
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

export default ModalComponent
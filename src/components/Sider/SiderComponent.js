import React from 'react'
import { Layout } from 'antd';
import MenuComponent from '../Menu/MenuComponent';

function SiderComponent() {
    const { Sider } = Layout;

    return (
        // side menu including menu
        <Sider 
            width={280}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                background: '#0c0d20'
            }}
        >
            <MenuComponent />
        </Sider>
    )
}

export default SiderComponent
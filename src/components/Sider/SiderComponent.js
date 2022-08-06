import React, { useState } from 'react'
import { Layout } from 'antd';
import MenuComponent from '../Menu/MenuComponent';

function SiderComponent() {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    return (
        // side menu including menu
        <Sider 
            collapsed={collapsed}
            width={280}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                background: '#15161b'
            }}
        >
            <MenuComponent />
        </Sider>
    )
}

export default SiderComponent
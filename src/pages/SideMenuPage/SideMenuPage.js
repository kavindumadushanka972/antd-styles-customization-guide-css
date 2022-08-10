import React from 'react'
import SideMenu from '../../AntdComponents/SideMenu/SideMenu'
import { useNavigate } from 'react-router-dom';
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function SideMenuPage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Menu Styles Customization 📜</h2>
            <a href="https://ant.design/components/menu/" target="_blank" rel="noreferrer">👉 Ant Design Menu</a>
            <hr />

            <div className='mt-4'>
                <SideMenu />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './SideMenu.css'

// menu item icons
import home from '../../images/home.png'
import bsc from '../../images/bsc.png'

// submenu icons
import { Codesandbox, Cpu, Database, Code, UserCheck } from 'react-feather'


function SideMenu() {

    const navigate = useNavigate()
    const location = useLocation()

    // menu item structure
    const getItem = (label, key, icon, children, theme) => {
        return {
            key,
            icon,
            children,
            label,
            theme,
        };
    }

    // menu items
    const items = [
    getItem('Home', '/home', <img src={home} alt="home" style={{width: '20px'}} />),
    getItem('BSC', '/bsc', <img src={bsc} alt="bsc" style={{width: '20px'}} />, [
        getItem('Live Pair Explorer', '/lpe', <Codesandbox size={12} />),
        getItem('Rug Scanner', '/rs', <Cpu size={12} />),
        getItem('Liquidity Checker', '/lc', <Database size={12} />),
        getItem('Transaction Simulator', '/ts', <Code size={12} />),
        getItem('Mini Audit', '/ma', <UserCheck size={12} />)
    ]),
    ];

    // onclick event on a menu item, navigates ti relevant route
    const onClick = (e) => {
        // Uncomment below line to route on your webpage
        // navigate(e.key);
    };

    return (
        <div>
        {/* menu section */}
        <Menu
            mode="inline"
            selectedKeys={location.pathname} // relevant navlink will be activated accrding to your route
            theme="dark"
            onClick={onClick}
            style={{ width: '300px', background: '#393c70', padding: '10px' }}
            items={items}
        />
        </div>
    )
}

export default SideMenu`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>SideMenu.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* styles for seperate menu items */
.ant-menu-item {
    height: 50px !important;
    border-radius: 5px;
    margin-left: 0px !important;
    font-weight: 500;
    animation-duration: 0.5s;
}

/* styles when hover on menu items */
.ant-menu-item:hover {
    animation-name: slide-menu-item;
    animation-timing-function: ease;
}

/* selected items styles */
.ant-menu-item-selected {
    background: #1990fe !important;
    box-shadow: 0 4px 8px 0 rgba(56, 60, 174, 0.5), 0 6px 20px 0 rgba(56, 60, 174, 0.5);
}

/* add styles for all submenu items */
.ant-menu-submenu {
    margin-left: 0px !important;
}

/* antd expanded submenu background color */
.ant-menu-submenu > .ant-menu {
    background-color: #393c70 !important;
}

/* add styles for each submenu items title */
.ant-menu-submenu-title {
    font-weight: 500;
}

@keyframes slide-menu-item {
    50%  { transform: translateX(5px); }
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

export default SideMenuPage
import React from 'react'
import { Menu } from 'antd';
import './SideMenu.css'

// menu item icons
import home from '../../images/home.png'
import bsc from '../../images/bsc.png'

// submenu icons
import { Codesandbox, Cpu, Database, Code, UserCheck } from 'react-feather'

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
    getItem('Home', 'home', <img src={home} alt="home" style={{width: '20px'}} />),
    getItem('BSC', 'bsc', <img src={bsc} alt="bsc" style={{width: '20px'}} />, [
        getItem('Live Pair Explorer', 'lpe', <Codesandbox size={12} />),
        getItem('Rug Scanner', 'rs', <Cpu size={12} />),
        getItem('Liquidity Checker', 'lc', <Database size={12} />),
        getItem('Transaction Simulator', 'ts', <Code size={12} />),
        getItem('Mini Audit', 'ma', <UserCheck size={12} />)
    ]),
];

// onclick event on a menu item, navigates ti relevant route
const onClick = (e) => {
    // Uncomment below line to route on your webpage
    // navigate(e.key);
};

function SideMenu() {
  return (
      <div>
        {/* menu section */}
        <Menu
            mode="inline"
            defaultSelectedKeys={['home']}
            theme="dark"
            onClick={onClick}
            style={{ width: '300px', background: '#393c70', padding: '10px' }}
            items={items}
        />
      </div>
  )
}

export default SideMenu
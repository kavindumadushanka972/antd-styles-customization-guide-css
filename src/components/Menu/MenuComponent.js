import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreFilled, RocketFilled } from '@ant-design/icons'
import './MenuComponent.css'

// menu item icons
import rugfree from '../../images/rugfree.png'

// submenu icons
import { Codesandbox, Cpu, Database, Code, UserCheck } from 'react-feather'

function MenuComponent() {

  const navigate = useNavigate()

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
    getItem('Home', 'home', <AppstoreFilled />),
    getItem('BSC', 'bsc', <RocketFilled />, [
        getItem('Live Pair Explorer', 'lpe', <Codesandbox size={12} />),
        getItem('Rug Scanner', 'rs', <Cpu size={12} />),
        getItem('Liquidity Checker', 'lc', <Database size={12} />),
        getItem('Transaction Simulator', 'ts', <Code size={12} />),
        getItem('Mini Audit', 'ma', <UserCheck size={12} />)
    ]),
  ];

  // onclick event on a menu item, navigates ti relevant route
  const onClick = (e) => {
    navigate(e.key);
  };


  return (
    <>
      {/* main logo section */}
      <div style={{marginTop: '30px', marginLeft: '10px', marginBottom: '20px'}} >
        <img alt='main-logo' src={rugfree} style={{ width: '40px', marginTop: '-5px', marginLeft: '20px' }} />
      </div>
      
      {/* menu section */}
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        theme="light"
        onClick={onClick}
        style={{ background: '#15161b' }}
        items={items}
      />
    </>
  )
}

export default MenuComponent

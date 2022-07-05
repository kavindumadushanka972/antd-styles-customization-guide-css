import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import './MenuComponent.css'

// menu item icons
import home from '../../images/home.png'
import bsc from '../../images/bsc.png'
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
    navigate(e.key);
  };


  return (
    <>
      {/* main logo section */}
      <div style={{marginTop: '30px', marginLeft: '10px'}} >
        <img alt='main-logo' src={rugfree} style={{ width: '40px', marginTop: '-5px', marginLeft: '20px' }} />
        <span className='main-title'>RUGFREEcoins</span>
      </div>
      
      {/* menu section */}
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        theme="dark"
        onClick={onClick}
        style={{ marginTop: '30px', width: '250px', background: '#0c0d20' }}
        items={items}
      />
    </>
  )
}

export default MenuComponent

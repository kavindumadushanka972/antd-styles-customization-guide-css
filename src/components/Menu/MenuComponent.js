import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { 
  AppstoreFilled, 
  CreditCardFilled, 
  ContainerFilled, 
  MenuUnfoldOutlined, 
  FormOutlined,
  BgColorsOutlined 
} from '@ant-design/icons'
import './MenuComponent.css'
import { useSelector } from "react-redux";

// menu item icons
import logo from '../../images/logo.png'

function MenuComponent() {

  const navigate = useNavigate()
  const location = useLocation()
  const { margin } = useSelector((state) => state.margin);
  

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
    getItem('Getting Started', '/', <AppstoreFilled />),
    getItem('Theme', '/theme', <BgColorsOutlined />),
    getItem('Card', '/card', <CreditCardFilled />),
    getItem('Drawer', '/drawer', <ContainerFilled />),
    getItem('Side Menu', '/sidemenu', <MenuUnfoldOutlined />),
    getItem('Forms', '/forms', <FormOutlined />),
    // getItem('Card', 'card', <RocketFilled />, [
    //     getItem('Live Pair Explorer', 'lpe', <Codesandbox size={12} />),
    //     getItem('Rug Scanner', 'rs', <Cpu size={12} />),
    //     getItem('Liquidity Checker', 'lc', <Database size={12} />),
    //     getItem('Transaction Simulator', 'ts', <Code size={12} />),
    //     getItem('Mini Audit', 'ma', <UserCheck size={12} />)
    // ]),
  ];

  // onclick event on a menu item, navigates ti relevant route
  const onClick = (e) => {
    navigate(e.key);
  };


  return (
    <>
      {/* main logo section */}
      <div style={{marginTop: '30px', marginLeft: '10px', marginBottom: '20px'}} >
        {
          margin ?
          <img alt='main-logo' src={logo} style={{ width: '140px', marginTop: '-5px', marginLeft: '55px' }} />
          :
          <img alt='main-logo' src={logo} style={{ width: '70px', marginTop: '-5px', marginLeft: '-5px' }} />
        }
        
      </div>
      
      {/* menu section */}
      <Menu
        mode="inline"
        selectedKeys={location.pathname}
        theme="dark"
        onClick={onClick}
        style={{ padding: '10px' }}
        items={items}
      />
    </>
  )
}

export default MenuComponent

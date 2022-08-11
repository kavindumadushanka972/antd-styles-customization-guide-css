import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { 
  AppstoreFilled, 
  CreditCardFilled, 
  ContainerFilled, 
  MenuUnfoldOutlined, 
  FormOutlined,
  BgColorsOutlined,
  CreditCardOutlined,
  ForwardOutlined,
} from '@ant-design/icons'
import { ToggleRight, Gift, Table, Clock } from 'react-feather';
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
    getItem('Theme Switcher', '/theme-switch', <Gift size={15} />),
    getItem('Card', '/card', <CreditCardFilled />),
    getItem('Drawer', '/drawer', <ContainerFilled />),
    getItem('Side Menu', '/sidemenu', <MenuUnfoldOutlined />),
    getItem('Forms', '/forms', <FormOutlined />),
    getItem('Modal', '/modal', <CreditCardOutlined />),
    getItem('Steps', '/steps', <ForwardOutlined />),
    getItem('Table', '/table', <Table size={15} />),
    getItem('Countdown', '/countdown', <Clock size={15} />),
    getItem('Switch', '/switch', <ToggleRight size={15} />),
    // getItem('Table', '/table', <Table size={15} />, [
    //   getItem('Normal Table', '/table', <TableOutlined  />),
    //   getItem('Expandable Table', '/expandable-table', <DatabaseOutlined />),
    // ]),
  ];

  // onclick event on a menu item, navigates ti relevant route
  const onClick = (e) => {
    navigate(e.key);
  };


  return (
    <>
      {/* main logo section */}
      <div style={{marginTop: '30px', marginLeft: '10px'}} >
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
        style={{ padding: '10px', paddingBottom: '70px' }}
        items={items}
      />
    </>
  )
}

export default MenuComponent

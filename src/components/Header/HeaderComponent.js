import React, { useState } from 'react'
import './HeaderComponent.css'
import { Menu } from 'react-feather'
import { Row, Col } from 'reactstrap'
import { Drawer, Switch } from 'antd'
import MenuComponent from '../Menu/MenuComponent'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from 'react-feather'
import { change } from '../../Redux/Theme'

function Header() {

  const { switcher, themes } = useThemeSwitcher()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { dark } = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  const toggleTheme = (isChecked) => {
    dispatch(change())
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  const showDrawer = () => {
    setShowMobileMenu(true);
  };

  const closeDrawer = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="sticky-top bg-blue p-4">
      <Row>
        <Col lg="12" md="12" sm="12" className='text-end'>

          <Switch 
          checkedChildren={<Moon size={16} style={{marginTop: '-2px'}} />}
          unCheckedChildren={<Sun size={16} color="#1b8fff" style={{marginTop: '-2px'}} />}
          checked={dark} 
          onChange={toggleTheme} 
          />
          <Menu className='mobile-menu' onClick={showDrawer} />
          
        </Col>
      </Row>

      <Drawer placement="left" onClose={closeDrawer} visible={showMobileMenu} closable={false} width="310px">
          <div>
            <MenuComponent />
          </div>
      </Drawer>
    </div>
  )
}

export default Header
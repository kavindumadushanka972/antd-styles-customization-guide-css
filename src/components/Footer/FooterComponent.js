import React from 'react'
import { Layout } from 'antd'

// footer logo
import logo from '../../images/logo.png'

function FooterComponent() {

  const { Footer } = Layout

  return (
    <Footer className='text-center' style={{background: '#15161b'}}>
      <img src={logo} alt="footer_logo" style={{width: '70px'}} /><br /><br />
      <span>COPYRIGHT © {new Date().getFullYear()} Developed By <a href="https://github.com/kavindumadushanka972" target="_blank" rel="noreferrer">Kavindu Madushanka</a>.</span>
    </Footer>
  )
}

export default FooterComponent
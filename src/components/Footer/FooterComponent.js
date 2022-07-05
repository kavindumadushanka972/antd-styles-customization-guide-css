import React from 'react'
import { Layout } from 'antd'

// footer logo
import rugfree from '../../images/rugfree.png'

function FooterComponent() {

  const { Footer } = Layout

  return (
    <Footer className='text-center' style={{background: '#0c0d20'}}>
      <img src={rugfree} alt="footer_logo" /><br /><br />
      <span>COPYRIGHT © 2022 Developed By <a href="https://www.rugfreecoins.com" target="_blank" rel="noreferrer">Rugfreecoins</a> All rights Reserved</span>
    </Footer>
  )
}

export default FooterComponent
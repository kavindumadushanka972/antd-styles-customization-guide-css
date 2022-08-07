import React from 'react'
import { Layout } from 'antd'
import { GithubOutlined, MailFilled } from '@ant-design/icons'
import { useSelector } from "react-redux";

function FooterComponent() {

  const { Footer } = Layout
  const { dark } = useSelector((state) => state.dark);

  return (
    <Footer className='text-center'>
      <span>COPYRIGHT © {new Date().getFullYear()} Developed By Kavindu Hewamanage.</span>
      <div className='text-center'>
        <a href="https://github.com/kavindumadushanka972" target="_blank" rel="noreferrer"><GithubOutlined style={{fontSize: '18px', marginRight: '5px', color: dark ? 'white' : 'black'}} /></a>
        <a href = "mailto: kavindumadushanka972@gmail.com"><MailFilled style={{fontSize: '18px', marginLeft: '5px', color: dark ? 'white' : 'black'}} /></a>
      </div>
    </Footer>
  )
}

export default FooterComponent
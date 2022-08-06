import { Layout } from 'antd';
import React from 'react';
import SiderComponent from './components/Sider/SiderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import Pages from './pages/Pages';
import Header from './components/Header/HeaderComponent';



function Layoutview() {

  const { Content } = Layout;

  return (
    // main layout of the website
    <Layout className='side-menu-margin'>

      {/* side menu component */}
      <div className='side-menu'>
        <SiderComponent />
      </div>
      
      <Layout>
            <Header />

            <Content style={{minHeight: '100vh', background: '#090b17'}}>
              <div className='container-fluid mt-4'>
                <Pages />
              </div>
            </Content>

            <FooterComponent />
      </Layout>
    </Layout>
  )
}

export default Layoutview

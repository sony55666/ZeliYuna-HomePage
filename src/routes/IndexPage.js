import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Icon } from 'antd';
import StreamPanel from '../components/StreamPanel/StreamPanel';

const { Header, Content, Footer, Sider } = Layout;

function IndexPage() {
  return (
    <Layout>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
         <StreamPanel></StreamPanel>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 300 }}>2</div>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 300 }}>3</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <Sider
        breakpoint="xl"
        collapsedWidth="0"
        width={'25%'}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className={styles.logo} />
        <Icon type="facebook" theme="filled" />
        <span className="nav-text">nav 1</span>
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu> */}
      </Sider>
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

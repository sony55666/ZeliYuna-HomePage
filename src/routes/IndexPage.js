import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Icon } from 'antd';
import StreamPanel from '../components/StreamPanel/StreamPanel';
import ProfileImg from '../picture/profileImg.jpg';
import SiderButton from '../components/SiderButton/SiderButton';


const { Header, Content, Footer, Sider } = Layout;
const Profile_Colums = [{
  title: '關於',
  type: 'question',
  link: ''
}, {
  title: 'Facebook',
  type: 'facebook',
  link: 'https://www.facebook.com/JhEnG.YInG.SaM?ref=bookmarks'
}, {
  title: 'Instagram',
  type: 'instagram',
  link: 'https://www.instagram.com/sony_55666/'
}, {
  title: 'Github',
  type: 'github',
  link: 'https://github.com/sony55666'
}, {
  title: '信箱',
  type: 'mail',
  link: 'mailto:sam22643112@gmail.com'
}]

function IndexPage() {
  let Profile_lists = [];
  for (let value of Profile_Colums) {
    Profile_lists.push(<SiderButton title={value.title} type={value.type} link={value.link}></SiderButton>);
  }
  return (
    <Layout>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <StreamPanel></StreamPanel>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <StreamPanel></StreamPanel>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <StreamPanel></StreamPanel>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <StreamPanel></StreamPanel>
        </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <StreamPanel></StreamPanel>
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

        style={{
          overflow: 'auto',
          height: '100%',
          position: 'fixed',
          right: 0,
        }}

      >
        <div className={styles.block} >
          <img alt="profile-p" src={ProfileImg} width="200" height="200" />
          <div>
            <h2 style={{ fontSize: 30, color: "rgba(255, 255, 255, 0.911)" }}>Sam Lin(政穎)</h2>
            <h4 style={{ fontSize: 20, color: "rgba(255, 255, 255, 0.911)", fontWeight: "bold" }}>對事情不只是一昧相信</h4>
          </div>
        </div>
        <div className={styles.block}>
          <ul>
            {Profile_lists}
          </ul>
        </div>

      </Sider>
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

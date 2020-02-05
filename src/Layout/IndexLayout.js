import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexLayout.css';
import { Layout, Menu, Modal } from 'antd';
import StreamPanel from '../components/StreamPanel/StreamPanel';
import ProfileImg from '../picture/profileImg.jpg';
import InfoImg from '../picture/info1.jpg';
import SiderPic from '../picture/menu.jpeg';
import SiderButton from '../components/SiderButton/SiderButton';
import { render } from 'react-dom';
import _ from 'lodash';


const { Footer, Sider } = Layout;
const Profile_Colums = [{
  title: '關於',
  type: 'question',
  link: '',
}, {
  title: 'Facebook',
  type: 'facebook',
  link: 'https://www.facebook.com/JhEnG.YInG.SaM?ref=bookmarks',
}, {
  title: 'Instagram',
  type: 'instagram',
  link: 'https://www.instagram.com/sony_55666/',
}, {
  title: 'Github',
  type: 'github',
  link: 'https://github.com/sony55666',
}, {
  title: '信箱',
  type: 'mail',
  link: 'mailto:sam22643112@gmail.com',
}]

class IndexLayout extends Component {

  handleProfile = () => {
    Modal.info({
      title: '介紹',
      content: (
        <div>
          <img alt="profile-p" src={InfoImg} width="300" height="300" />
          <p>在繁忙的都市裡，深刻體會到社會快速的節奏</p>
          <p>這使我有著相當大的抗壓性，在這之中脫穎而出</p>
          <p>也影響我變得樂觀</p>
          <p>開始對事情有多面向思考的能力。</p>
        </div>
      ),
      onOk() { },
    });
  }

  // componentDidMount() {
  //   this.setBlogInfo();
  // }

  // setBlogInfo(){
  //   const { dispatch } = this.props;

  //   dispatch({
  //     type: 'blogData/GET_BLOG_INFO'
  //   })
  // }

  render() {
    // const { BlogInfo } = this.props;
    let Profile_lists = [];
    // let Blog_lists = [];
    let P_count = 0;
    // let B_count = 0;

    for (let value of Profile_Colums) {
      Profile_lists.push(<SiderButton title={value.title} type={value.type} link={value.link} key={P_count} handleProfile={this.handleProfile}></SiderButton>);
      P_count++;
    }

    // for (let value of BlogInfo) {
    //   Blog_lists.push(
    //     <Content style={{ margin: '24px 16px 0' }}>
    //       <StreamPanel title={value.title} date={value.date} content={value.content} list={value.list} key={B_count} count={B_count}></StreamPanel>
    //     </Content>
    //   )
    //   B_count++;
    // }

    return (
      <Layout>
        <Layout>
          {
            this.props.children
          }
          <Footer style={{ textAlign: 'center' }}> ©2019 Created by Ant UED</Footer>
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
            backgroundImage: 'url(' + SiderPic + ')'
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

    )
  };

}

const mapStateToProps = (state) => {
  return {
    BlogInfo: _.get(state, 'blogData.BlogInfo', null),
  }
}

export default connect(mapStateToProps)(IndexLayout);

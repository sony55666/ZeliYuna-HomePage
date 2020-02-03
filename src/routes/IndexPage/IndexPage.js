import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { routerRedux } from 'dva/router';
import { Layout, Menu, Modal } from 'antd';
import StreamPanel from '../../components/StreamPanel/StreamPanel';
import ProfileImg from '../../picture/profileImg.jpg';
import SiderPic from '../../picture/blog1.jpeg';
import SiderButton from '../../components/SiderButton/SiderButton';
import { render } from 'react-dom';
import _ from 'lodash';


const { Content } = Layout;

class IndexPage extends Component {

  handleBlog = (num) => {
    this.props.dispatch(routerRedux.push(`/blog/${num}`));
  }
  
  render() {
    const { BlogInfo } = this.props;
    let Blog_lists = [];
    let B_count = 0;


    for (let value of BlogInfo) {
      Blog_lists.push(
        // <Content style={{ margin: '24px 16px 0' }}>
        //   <Link to="/blog" activeStyle={{ color: 'blacck' }}>
        //     <StreamPanel title={value.title} date={value.date} content={value.content} list={value.list} key={B_count} count={B_count}></StreamPanel>
        //   </Link>
        // </Content>
        <Content style={{ margin: '24px 16px 0' }}>
          <a rel="noopener" style={{ color: 'rgb(63, 18, 18)', textDecoration: 'none' }} href={`/#/blog/${B_count}`}>
            <StreamPanel title={value.title} date={value.date} content={value.content} list={value.list} key={B_count} count={B_count}></StreamPanel>
          </a>
        </Content>
      )
      B_count++;
    }

    return (
      Blog_lists
    )
  };

}

const mapStateToProps = (state) => {
  return {
    BlogInfo: _.get(state, 'blogData.BlogInfo', null),
  }
}

export default connect(mapStateToProps)(IndexPage);

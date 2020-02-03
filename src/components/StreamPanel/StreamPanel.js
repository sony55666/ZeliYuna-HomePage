import React, { Component } from 'react';
import styles from './StreamPanel.css';
import { Icon, Typography, Col, Row } from 'antd';
import { } from 'antd';
import _ from 'lodash';

const { Title } = Typography;

const colums = {
  title: 'App IntelliJ 基本語法',
  date: '2020/1/14 16:37',
  list: ['xx', 'xxx', 'xxx', 'xxxx']
}

class StreamPanel extends Component {



  render() {
    const title = this.props.title;
    const date = this.props.date;
    let blog_count = this.props.count + 1 ;
    const Dipicamond = require('../../picture/blog' + blog_count + '.jpeg');
    const content_br = _.split(this.props.content, '</br> ');
    let content = '';
    if (content_br.length > 7) {
      content
      for (let i = 0; i < content_br.length; i++) {
        if (i < 6) {
          content += content_br[i] + '</br> ';
        }
        else{
          content = content + '</br> 繼續閱讀。。。。。。';
          break;
        }
      }
    }

    return (

      <div className={styles.list} key={blog_count}>
        <img src={Dipicamond} alt={blog_count} style={{ width: '250px', height: '250px', backGround: 'rgb(255, 0, 0)', margin: '0 20px' }}></img>
        <div>
          <Title level={3}>{title}</Title>
          <div style={{ display: 'inline-block', fontSize:'16px', marginBottom:'5px' }}>{date}</div>
          {/* dangerouslySetInnerHTML 將字串轉為html */}
          <div dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>
      </div>
    );
  }

};

StreamPanel.propTypes = {
};

export default StreamPanel;

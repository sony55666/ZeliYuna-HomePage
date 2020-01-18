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
    const pic = this.props.pic;
    const date = this.props.date;
    const content = this.props.content;
    const count = this.props.count;

    return (
      <div className={styles.list} key={count}>
        <img src={"../../picture/blog"+count+1+".jpeg"} alt={count} style={{ width: '250px', height: '250px', backGround: 'rgb(255, 0, 0)', margin: '0 20px' }}></img>
        <div>
          <Title level={2}>{title}</Title>
          <div style={{ display: 'inline-block' }}>{date}</div>
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

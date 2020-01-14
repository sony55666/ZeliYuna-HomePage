import React from 'react';
import styles from './StreamPanel.css';
import { Icon, Typography, Col, Row } from 'antd';
import { } from 'antd';

const { Title } = Typography;

const colums = {
  title: 'App IntelliJ 基本語法',
  date: '2020/1/14 16:37',
  list: ['xx', 'xxx', 'xxx', 'xxxx']
}

const StreamPanel = () => {
  return (
    <div style={{ display: 'flex', padding: '24px 8px', background: '#fff', minHeight: 300 }}>
      <div className={styles.pic} />
      <div>
        <Title level={2}>{colums.title}</Title>
        <div style={{ display: 'inline-block'}}>{colums.date}</div>
      </div>

      {/* <Row>
        <Col span={6}>
          <div className={styles.pic} />
        </Col>
        <Col span={18} style={{ float: 'right' }}>
          <Title level={2}>{colums.title}</Title>
          <div>{colums.date}</div>

        </Col>
      </Row> */}

    </div>
  );
};

StreamPanel.propTypes = {
};

export default StreamPanel;

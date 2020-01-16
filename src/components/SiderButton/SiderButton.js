import React, { Component } from 'react';
import styles from './SiderButton.css';
import { Icon, Form } from 'antd';

class SiderButton extends Component {



  render() {
    const title = this.props.title;
    const type = this.props.type;
    const link = this.props.link;

    return (
      <li className={styles.sidebarButtonLink} key={title} style={{ listStyleType: "none" }}>
        <a href={link}  target="blank" title={title}>
          <Icon type={type} />
          <span className="nav-text">{title}</span>
        </a>
      </li>
    );
  }
};

SiderButton.propTypes = {
};

export default Form.create()(SiderButton);

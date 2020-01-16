import React, { Component } from 'react';
import styles from './SiderButton.css';
import { Icon, Form } from 'antd';

class SiderButton extends Component {



  render() {
    const title = this.props.title;
    const type = this.props.type;
    const link = this.props.link;
    const key = this.props.key;
    const click = this.props.click;

    return (
      <li className={styles.sidebarButtonLink} key={key} style={{ listStyleType: "none" }}>
        {
          click == '' ? (<a href={link} target="blank" title={title} >
            <Icon type={type} />
            <span className="nav-text">{title}</span>
            </a>) : (
              <a href='#' target="blank" title={title}  onClick={this.props.handleProfile}>
                <Icon type={type} />
                <span className="nav-text">{title}</span>
              </a>
            )
        }

      </li>
    );
  }
};

SiderButton.propTypes = {
};

export default Form.create()(SiderButton);

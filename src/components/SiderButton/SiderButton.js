import React from 'react';
import styles from SiderButton.css;
import { Icon } from 'antd';

const SiderButton = () => {
  return (
    <li className={style.SiderButton}>
      <Icon type="facebook" theme="filled" />
      <span className="nav-text">nav 1</span>
    </li>
  );
};

SiderButton.propTypes = {
};

export default SiderButton;

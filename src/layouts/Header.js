import React, {Component} from 'react';
import styles from './Header.css'
import {Button} from 'antd';

const ButtonGroup = Button.Group;

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>logo</div>
        <ButtonGroup className={styles.buttonGroup}>
          <Button>业务</Button>
          <Button>分析</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Header;

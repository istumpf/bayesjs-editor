import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  title: {
    margin: 0,
    color: '#fcfcfc',
    padding: '5px 10px 10px',
  },
  menuButton: {
    marginLeft: 'auto',
    marginRight: '10px',
    fontSize: '24px',
    color: '#fcfcfc',
    border: 'none',
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
});

const Header = () => (
  <div className={css(styles.header)}>
    <h1 className={css(styles.title)}>Bayes Editor</h1>
    <Button
      onClick={() => alert('menu')}
      style={styles.menuButton}
      title="Menu"
    >
      <i className="fa fa-bars" />
    </Button>
  </div>
);

export default Header;

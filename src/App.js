import React from 'react';
import styles from './components/button.module.css';

const Button = () => {
  return (
    <div className='appDiv'>
      <button className={styles.button}>Click me</button>
    </div>
  )
};

export default Button;

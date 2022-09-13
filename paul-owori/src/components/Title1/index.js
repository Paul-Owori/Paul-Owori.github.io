import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Title1 = ({ text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <p>Senior Fullstack Developer</p>
    </div>
  );
};

export default Title1;

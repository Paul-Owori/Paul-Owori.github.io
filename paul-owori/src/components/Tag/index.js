import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Tag = ({ text, isRed, style = {}, isLarge = false, isRaised }) => {
  return (
    <div
      className={
        isRed
          ? isRaised
            ? styles.raisedRedContainer
            : styles.redContainer
          : isRaised
          ? styles.raisedContainer
          : styles.container
      }
      style={style}
    >
      <p style={isLarge ? { fontSize: '0.6em' } : {}}>{text}</p>
    </div>
  );
};

export default Tag;

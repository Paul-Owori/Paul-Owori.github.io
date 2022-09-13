import React, { useState, useEffect } from 'react';
import squareProfileImage from '../../assets/images/square_profile.jpg';
import styles from './style.module.css';
const ProfileImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={squareProfileImage} className={styles.img} />
      </div>
    </div>
  );
};

export default ProfileImage;

/**
 *   <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={squareProfileImage} className={styles.img} />
      </div>
    </div>
 */

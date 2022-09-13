import React, { useState, useEffect } from 'react';
import ProfileImage from '../../components/ProfileImage';
import Title1 from '../../components/Title1';
import styles from './style.module.css';
const ProfileSection = () => {
  return (
    <div className={styles.container}>
      <ProfileImage />
      <Title1 text={'Paul Robert Owori'} />
    </div>
  );
};

export default ProfileSection;

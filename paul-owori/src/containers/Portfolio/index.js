import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SectionCard from './../../components/SectionCard';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <SectionCard
        title="A few of my Past Projects"
        desc="I have a few personal projects that I did as works of passion as well as some professional work I did so I wouldn't get fired."
      ></SectionCard>
    </div>
  );
};

export default Portfolio;

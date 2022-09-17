import React, { useState, useEffect } from 'react';
import { BiChevronDownCircle } from 'react-icons/bi';
import styles from './style.module.css';

const SectionCard = ({ title, desc, content, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.titleTop}>
          <h3 className={styles.title}>{title}</h3>
          <BiChevronDownCircle color="#ddb6c3" size={25} />
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
      </div>
      {isOpen ? (
        <div className={styles.childrenContainer}>{children}</div>
      ) : null}
      <div></div>
    </div>
  );
};

export default SectionCard;

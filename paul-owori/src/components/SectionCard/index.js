import React, { useState, useEffect } from 'react';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { Fade } from 'react-awesome-reveal';
import Tag from '../Tag';
import styles from './style.module.css';

const SectionCard = ({
  title,
  desc,
  checkoutOpenText,
  checkoutClosedText,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.titleTop}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
      </div>
      {isOpen ? (
        <div className={styles.childrenContainer}>
          <Fade triggerOnce>{children}</Fade>
        </div>
      ) : null}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.checkoutContainer}
      >
        <Tag
          text={
            <div className={styles.checkoutBtn}>
              <p>{isOpen ? checkoutOpenText : checkoutClosedText}</p>

              {isOpen ? (
                <BiChevronUpCircle
                  color="#ddb6c3"
                  size={20}
                  style={{ marginLeft: '10px' }}
                />
              ) : (
                <BiChevronDownCircle
                  color="#ddb6c3"
                  size={20}
                  style={{ marginLeft: '10px' }}
                />
              )}
            </div>
          }
          isRaised={!isOpen}
          isRed
          style={{ fontSize: '3.2em' }}
        />
      </div>
    </div>
  );
};

export default SectionCard;

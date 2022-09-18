import React, { useState, useEffect } from 'react';
import { IoIosCloudDownload } from 'react-icons/io';
import { AttentionSeeker } from 'react-awesome-reveal';

import Tag from '../../components/Tag';
import styles from './style.module.css';
import resumePdf from '../../assets/pdfs/Paul_Owori_CV.pdf';

const ResumeDownloader = () => {
  return (
    <div className={styles.container}>
      <AttentionSeeker effect="headShake">
        <Tag
          isLarge
          isRaised
          isRed
          text={
            <a href={resumePdf} download>
              <div className={styles.textContainer}>
                {' '}
                <p>Download my resume</p>
                <IoIosCloudDownload size={'4vh'} />{' '}
              </div>
            </a>
          }
        />
      </AttentionSeeker>
    </div>
  );
};

export default ResumeDownloader;

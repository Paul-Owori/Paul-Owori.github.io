import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SectionCard from './../../components/SectionCard';
import Tag from '../../components/Tag';

const jobs = [
  {
    isRemote: false,
    employer: 'Buri Africa Ltd',
    timeframe: 'NOV 2019 - MAY 2022',
    desc: [
      'Building Web-App front-ends with Vue.js and React.js.',
      'Building Mobile-App UI’s with React Native.',
      'Building & maintaining API’s on Node with Express.',
      'Debugging and Maintenance of Web and Mobile Apps.',
    ],
  },
  {
    isRemote: false,
    employer: 'Outbox (U) Ltd.',
    timeframe: 'NOV 2019 - MAY 2022',
    desc: [
      'Building Web-App front-ends with Vue.js and React.js.',
      'Building Mobile-App UI’s with React Native.',
      'Building & maintaining API’s on Node with Express.',
      'Debugging and Maintenance of Web and Mobile Apps.',
    ],
  },
  {
    isRemote: false,
    employer: 'Shockdrift Technologies',
    timeframe: 'AUGUST 2019 - MAY 2020',
    desc: [
      'Building Web-App front-ends with Vue.js and React.js.',
      'Building Mobile-App User Interfaces with React Native.',
    ],
  },
  {
    isRemote: true,
    employer: 'Skuad PTE Ltd.',
    timeframe: 'SEPT 2021 - PRESENT',
    desc: [
      'Building & Maintaining Web-App frontends using Next.js',
      'Building, Maintaining and Deploying Mobile-Apps with React Native on both iOS and Android.',
      'Training new team members on how to work on our existing platforms',
      'GraphQl integration on both Web & Mobile',
    ],
  },
];
const PastJobs = () => {
  return (
    <div className={styles.container}>
      <SectionCard
        title="My Work History"
        desc="I've been a software developer for 4 years now and I've worked both remotely and on-site with some very brilliant teams."
        checkoutClosedText="Check out my Work History"
        checkoutOpenText="Close Work History"
      >
        {jobs.map((job) => {
          return (
            <div className={styles.job}>
              <div className={styles.jobLogoRow}>
                {/* <img src={job.logo} className={styles.jobLogo} /> */}
                <p>{job.employer}</p>
                <Tag
                  text={job.isRemote ? 'Remote' : 'On-site'}
                  // isRed
                  isLarge
                  style={{ marginLeft: '10px' }}
                />
              </div>
              <div className={styles.timeFrame}>
                <p>{job.timeframe}</p>
              </div>
              <div className={styles.jobDesc}>
                <ul>
                  {job.desc.map((it) => (
                    <li>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </SectionCard>
    </div>
  );
};

export default PastJobs;

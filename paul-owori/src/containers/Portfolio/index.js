import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SectionCard from './../../components/SectionCard';
import Tag from './../../components/Tag';

import { projects } from './projects';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <SectionCard
        title="A few of my Past Projects"
        desc="I have a few personal projects that I did as works of passion as well as some professional work I did sometimes solo and sometimes as part of a team."
        checkoutClosedText="Check out my Portfolio"
        checkoutOpenText="Close Portfolio"
      >
        {projects.map((pj) => {
          return (
            <div className={styles.project}>
              <p className={styles.name}>{pj.name}</p>
              <p className={styles.employer}>{pj.employer}</p>
              <div className={styles.tagsRow}>
                <Tag
                  text={pj.singleHandedly ? 'Solo Effort' : 'Team Effort'}
                  style={{ marginRight: '10px', marginBottom: '5px' }}
                />

                <Tag
                  text={pj.remote ? 'Remote' : 'On-Site'}
                  style={{ marginRight: '10px', marginBottom: '5px' }}
                />
                {pj.isFrontend ? (
                  <Tag
                    text="Frontend"
                    style={{ marginRight: '10px', marginBottom: '5px' }}
                  />
                ) : null}
                {pj.isBackend ? (
                  <Tag
                    text="Backend"
                    style={{ marginRight: '10px', marginBottom: '5px' }}
                  />
                ) : null}
                <Tag
                  text={pj.isPersonal ? 'Personal' : 'Professional'}
                  style={{ marginRight: '10px', marginBottom: '5px' }}
                />
              </div>

              <p className={styles.desc}>{pj.desc}</p>

              <div className={styles.tagsRow} style={{ marginTop: '10px' }}>
                {pj.stack.map((skill) => {
                  return <img src={skill} className={styles.skill} />;
                })}
              </div>

              <div>
                {pj.codeLink ? (
                  <p className={styles.linkContainer}>
                    Check out the codebase{' '}
                    <Tag
                      text={
                        <a href={pj.codeLink} target="_blank">
                          here
                        </a>
                      }
                      style={{ marginLeft: '10px', fontWeight: 'bold' }}
                      isRaised
                      isLarge
                    />
                  </p>
                ) : (
                  <p className={styles.linkContainer}>
                    Codebase is privately hosted
                  </p>
                )}
              </div>

              <div>
                {pj.pjLink ? (
                  <p className={styles.linkContainer}>
                    Check out the project{' '}
                    <Tag
                      text={
                        <a href={pj.pjLink} target="_blank">
                          here
                        </a>
                      }
                      style={{ marginLeft: '10px', fontWeight: 'bold' }}
                      isRaised
                      isLarge
                      // isRed
                    />
                  </p>
                ) : (
                  <p className={styles.linkContainer}>
                    Project is currently unavailable
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </SectionCard>
    </div>
  );
};

export default Portfolio;

/**
 *  name:"",
    employer:"",
    desc:"",
    singleHandedly:false,
    remote:false,
      isFrontend: true,
    isBackend: false,
    isPersonal: false,
    pjLink:"",
    codeLink:"",
    stack:[]
 */

import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SectionCard from './../../components/SectionCard';

import css3Logo from '../../assets/logos/skills/css3.svg';
import herokuLogo from '../../assets/logos/skills/heroku.svg';
import nodeLogo from '../../assets/logos/skills/node-js.svg';
import reduxLogo from '../../assets/logos/skills/redux.svg';
import expressjsLogo from '../../assets/logos/skills/expressjs.svg';
import javascriptLogo from '../../assets/logos/skills/javascript.svg';
import photoshopLogo from '../../assets/logos/skills/photoshop.svg';
import sassLogo from '../../assets/logos/skills/sass.svg';
import firebaseLogo from '../../assets/logos/skills/firebase.svg';
import mongodbLogo from '../../assets/logos/skills/mongodb.svg';
import reactNativeLogo from '../../assets/logos/skills/react-native.svg';
import typescriptLogo from '../../assets/logos/skills/typescript.svg';
import googleLogo from '../../assets/logos/skills/google-cloud.svg';
import nextLogo from '../../assets/logos/skills/next-js.svg';
import reactLogo from '../../assets/logos/skills/react.svg';
import graphqlLogo from '../../assets/logos/skills/graphql.svg';
import vueLogo from '../../assets/logos/skills/vue-js.svg';
import html5Logo from '../../assets/logos/skills/html-5.svg';

const skills = [
  { name: 'HTML 5', icon: html5Logo },
  { name: 'GraphQl', icon: graphqlLogo },
  { name: 'Vue.js', icon: vueLogo },
  { name: 'CSS 3', icon: css3Logo },
  { name: 'Heroku', icon: herokuLogo },
  { name: 'Node.js', icon: nodeLogo },
  { name: 'Redux.js', icon: reduxLogo },
  { name: 'Express.js', icon: expressjsLogo },
  { name: 'Javascript', icon: javascriptLogo },
  { name: 'Adobe Photoshop', icon: photoshopLogo },
  { name: 'Sass', icon: sassLogo },
  { name: 'Firebase', icon: firebaseLogo },
  { name: 'Mongodb', icon: mongodbLogo },
  { name: 'React Native', icon: reactNativeLogo },
  { name: 'Typescript', icon: typescriptLogo },
  { name: 'Google Cloud', icon: googleLogo },
  { name: 'Next.js', icon: nextLogo },
  { name: 'React.js', icon: reactLogo },
];

const SkillsContainer = () => {
  return (
    <div className={styles.container}>
      <SectionCard
        title="My Skills"
        desc="I frequently explore different technologies and ideas that intrigue me in my freetime and I'm always open to learning more. The skills I gain from this exploration always come in handy in my professional work."
      >
        <div className={styles.skillRow}>
          {skills.map((skill) => {
            return (
              <div className={styles.skill}>
                <img src={skill.icon} className={styles.skillIcon} />
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
};

export default SkillsContainer;

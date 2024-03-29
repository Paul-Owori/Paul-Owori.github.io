import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Tag from '../../components/Tag';
import github from '../../assets/logos/2_github.svg';
import linkedin from '../../assets/logos/linkedin.svg';
import whatsapp from '../../assets/logos/whatsapp.svg';
import mail from '../../assets/logos/mail.svg';

const LogoBtn = ({ link, logo }) => {
  return (
    <div className={styles.iconBtn}>
      <a href={link} target="_blank">
        <img src={logo} className={styles.logo} />
      </a>
    </div>
  );
};

const Title1 = ({ text }) => {
  const logos = [
    {
      link: 'https://github.com/Paul-Owori',
      logo: github,
    },
    {
      link: 'https://www.linkedin.com/in/paul-owori-957753171/',
      logo: linkedin,
    },
    {
      link: 'mailto:prowori2@gmail.com',
      logo: mail,
    },
    {
      link: 'https://api.whatsapp.com/send?phone=256759433706',
      logo: whatsapp,
    },
  ];

  const roles = ['Frontend', 'Backend', 'Web', 'App', 'Fullstack'];
  return (
    <div className={styles.allContainer}>
      <div className={styles.container}>
        <p>{text}</p>
        <p>Consultant Software Engineer</p>
        <div className={styles.logoRow} style={{ paddingLeft: '0px' }}>
          {roles.map((role) => (
            <Tag
              text={role}
              style={{
                fontSize: '4vh',
                marginBottom: '5px',
                marginRight: '5px',
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.logoRow}>
        {logos.map((item) => (
          <LogoBtn link={item.link} logo={item.logo} key={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Title1;

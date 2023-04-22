import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRoute } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Nav2.module.css';
import React from 'react';
import Link from 'next/link';

const Nav2 = () => {
  return (
    <div className={styles.nav}>
      <Link legacyBehaviour href="/">
        <img src="/nav-images/result.png" width={500} height={250} />
      </Link>
      <nav>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px' }} size="2x" />
        </Link>
        <Link href="/profile">
          <FontAwesomeIcon icon={faUser} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px'}} size="2x"/> 
        </Link>
        <Link href="/itineraries">
          <FontAwesomeIcon icon={faRoute} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px' }} size="2x"/>
        </Link>
      </nav>
    </div>
  );
};

export default Nav2;



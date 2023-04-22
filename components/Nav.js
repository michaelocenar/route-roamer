import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRoute } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Nav.module.css';
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link legacyBehaviour href="/">
        <img src="/nav-images/result.png" width={500} height={250} />
      </Link>
      <nav className={styles.fullNav}>
      <Link href="/">
          <FontAwesomeIcon icon={faHouse} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px' }} />
          <span className={styles.iconText}>Home</span>
        </Link>
        <Link href="/profile">
          <FontAwesomeIcon icon={faUser} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px'}}/> 
          <span className={styles.iconText}>Profile</span>
        </Link>
        <Link href="/itineraries">
          <FontAwesomeIcon icon={faRoute} className={styles.icon} style={{ color: '#ebebeb', marginRight: '20px' }}/>
          <span className={styles.iconText}>For You</span>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

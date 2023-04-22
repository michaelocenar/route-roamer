import React from 'react';
import Link from 'next/link';
import styles from './Nav2.module.css';

const Nav2 = () => {
  return (
    <div className={styles.nav}>
      <Link legacyBehaviour href="/">
        <div className={styles.logo}>
            <img src="/nav-images/result.png"/>
        </div>
      </Link>
      <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/itineraries">Itineraries</Link>
      </nav>
    </div>
  );
};

export default Nav2;
import React from 'react';
import Link from 'next/link';
import styles from './Nav2.module.css';
import Image from 'next/image'

const Nav2 = () => {
  return (
    <div className={styles.nav}>
      <Link legacyBehaviour href="/">
            <img src="/nav-images/result.png" width={500} height={250}/>
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
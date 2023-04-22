import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import Image from 'next/image'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link legacyBehaviour href="/">
            <img src="/nav-images/result.png" width={500} height={300}/>
      </Link>
      <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/itineraries">Itineraries</Link>
      </nav>
    </div>
  );
};

export default Nav;
import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h2>ROUTE ROAMER</h2>
      <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/itineraries">Itineraries</Link>
      </nav>
    </div>
  );
};

export default Nav;

import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h2>THIS IS THE NAV BAR</h2>
      <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/itinerary">Itinerary</Link>
      </nav>
    </div>
  );
};

export default Nav;

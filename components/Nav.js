import React from 'react';
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <h2>
        THIS IS THE NAV BAR
      </h2>
      <Link href='/'>Homepage</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/itinerary'>Itinerary</Link>
    </div>
  );
};

export default Nav;

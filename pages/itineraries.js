import React from 'react';
import Nav from "../components/Nav";
import styles from "./itineraries.module.css"
import TileGrid from '../components/TileGrid';

const itineraries = () => {
  return (
    <div className={styles.full}>
      <Nav />
      <h2>CHECK OUT THESE ROUTES</h2>
      <div className={styles.background}>
        <TileGrid/>
     </div>
    </div>
  );
};

export default itineraries;

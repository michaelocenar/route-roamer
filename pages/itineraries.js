import React from 'react';
import Nav2 from "../components/Nav2";
import styles from "./itineraries.module.css"
import TileGrid from '../components/TileGrid';

const itineraries = () => {
  return (
    <div className={styles.full}>
      <Nav2 />
      <h2>CHECK OUT THESE ROUTES</h2>
      <div className={styles.background}>
        <TileGrid/>
     </div>
    </div>
  );
};

export default itineraries;

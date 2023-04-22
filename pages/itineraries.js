import React from 'react';
import Nav2 from "../components/Nav2";
import styles from "./itineraries.module.css"
import TileGrid from '../components/TileGrid';

const itineraries = () => {
  return (
    <div className={styles.background}>
      <Nav2 />
      <div>
        <TileGrid/>
     </div>
    </div>
  );
};

export default itineraries;

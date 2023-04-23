import React from 'react';
import Nav from "../components/Nav";
import styles from "./itineraries.module.css"
import TileGrid from '../components/TileGrid';

const itineraries = () => {
  return (
    <div className={styles.background}>
      <Nav />
      <div>
        <TileGrid/>
     </div>
    </div>
  );
};

export default itineraries;

import React from 'react';
import Nav from "../components/Nav";
import styles from "./itineraries.module.css"
import Tile from '../components/Tile';
import TileGrid from '../components/TileGrid';

const itineraries = () => {
  return (
    <div>
      <Nav />
      <h3>This is the premade itin page page</h3>
      <div className={styles.background}>
        <TileGrid/>
     </div>
    </div>
  );
};

export default itineraries;

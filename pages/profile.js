import React from 'react';
import Nav2 from "../components/Nav2";
import User from "../components/User";
import styles from "./profile.module.css";
import BootstrapCarousel from "../components/Carousel";

const Profile = () => {
  return (
    <div>
      <Nav2 />
      <div className={styles.container}>
        <div className={styles.User}>
          <User />
        </div>
        <div className={styles.profile}></div>
        <div className={styles.favTitle}><h3>My Favourite Itineraries</h3></div>
        <div className={styles.carouselContainer}>
          <BootstrapCarousel />
        </div>
      </div>
    </div>
  );
};

export default Profile;

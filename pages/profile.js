import React from 'react';
import Nav from "../components/Nav";
import User from "../components/User";
import styles from "./profile.module.css";
import BootstrapCarousel from "../components/Carousel";

const Profile = () => {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.User}>
          <User />
        </div>
        <div className={styles.profile}></div>
        <div className={styles.carouselContainer}>
          <BootstrapCarousel />
        </div>
      </div>
    </div>
  );
};

export default Profile;


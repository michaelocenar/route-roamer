import React from 'react';
import Nav from "../components/Nav";
import User from "../components/User";
import styles from "./profile.module.css";


import Head from "next/head";
import BootstrapCarousel from "../components/Carousel";

const Profile = () => {
  return (
    <div>
      <Nav />
      <div className={styles.User}>
        <User />
      </div>
      <div className={styles.profile}></div>
      <h3>My Favourite Itineraries</h3>
      <BootstrapCarousel />
    </div>
  );
};

export default Profile;

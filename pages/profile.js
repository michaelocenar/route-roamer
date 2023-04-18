import React from 'react';
import Nav from "../components/Nav";
import RotatingGlobe from "../components/RotatingGlobe";
import styles from "./profile.module.css"

const Profile = () => {
  return (
    <div>
      <Nav />
      <h3>This is the profile page</h3>
      <div className={styles.background}>
      <RotatingGlobe/>
     </div>
    </div>
  );
};

export default Profile;

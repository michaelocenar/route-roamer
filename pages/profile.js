import React from 'react';
import Nav from "../components/Nav";
import styles from "./profile.module.css"

const Profile = () => {
  return (
    <div>
      <Nav />
      <h3>This is the profile page</h3>
      <div className={styles.background}>
     </div>
    </div>
  );
};

export default Profile;

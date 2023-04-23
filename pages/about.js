import React from 'react';
import Nav from "../components/Nav";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <Nav />
      <div className={styles.about}></div>
      <div className={styles.mission}>
        <div><h3>About Route Roamer</h3>
          <p>Our mission is to make travel planning easier and automated for users.</p>
        </div>
      </div>
      <div className={styles.creators}>
        <div className={styles.namra}>
          <img src="/tile-images/paris.jpeg" className={styles.namraPic} />
          <h2>Namra Aslam</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className={styles.michael}>
          <img src="public/creators/MO.JPG" className={styles.michaelPic} />
          <h2>Michael Ocenar</h2>
          <p>"Michael is a full-stack developer from Calgary with prior experience in accounting/finance. His part in the project dealt mainly with the integration of the OpenAI and Google Maps API. When he isn't programming, Michael loves to ski, hike, bike, play the piano, and travel."</p>
        </div>
        <div className={styles.jennifer}>
          <img src="/creators/JQ.jpg" className={styles.jenniferPic} />
          <h2>Jennifer Quintal</h2>
          <p>"Jennifer is a full-stack web developer with a background in operations and experiential marketing. Her main focus on Route Roamer was providing users with suggested itineraries, creating user navigation, along with minor styling. When Jennifer is not programming, you can find her running on the seawall, in a yoga studio, or at one of Vancouver's fine beaches."</p>
        </div>
      </div>
    </div>
  );
};

export default About;

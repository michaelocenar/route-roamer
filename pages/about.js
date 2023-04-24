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
          <p>Route Roamer simplifies travel planning by providing a user-friendly platform to create and share itineraries effortlessly. With personalized recommendations and detailed location markers powered by AI, our mission is to enhance the joy of travel by taking the hassle out of planning, allowing our users to focus on what matters most - the journey.</p>
        </div>
      </div>
      <div className={styles.creators}>
        <div className={styles.namra}>
          <img src="/creators/NA.jpeg" className={styles.namraPic} />
          <h2 className={styles.title}>Namra Aslam</h2>
          <p className={styles.description}>"Meet Namra! A full-stack developer from Calgary with a background in cybersecurity. During the project, Namra focused on integrating the Mapbox API as well as styling, ensuring a seamless user experience. When she's not coding, Namra can be found at a concert, binge-watching the latest HBO series on Sundays, on a long walk, or reading."</p>
        </div>
        <div className={styles.michael}>
          <img src="/creators/MO1.jpeg" className={styles.michaelPic} />
          <h2 className={styles.title}>Michael Ocenar</h2>
          <p className={styles.description}>"Michael is a full-stack developer from Calgary with prior experience in accounting/finance. His part in the project dealt mainly with the integration of the OpenAI and Google Maps API. When he isn't programming, Michael loves to ski, hike, bike, play the piano, and travel."</p>
        </div>
        <div className={styles.jennifer}>
          <img src="/creators/JQ.jpeg" className={styles.jenniferPic} />
          <h2 className={styles.title}>Jennifer Quintal</h2>
          <p className={styles.description}>"Jennifer is a full-stack web developer with a background in operations and experiential marketing. Her main focus on Route Roamer was providing users with suggested itineraries, creating user navigation, along with minor styling. When Jennifer is not programming, you can find her running on the seawall, in a yoga studio, or at one of Vancouver's fine beaches."</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import styles from "/components/User.module.css";



const User = () => {
  return (
    <div className={styles.User}>
      <span>
        <img src="https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg" className={styles.userImage} />
      </span>
      <span><p>User Name: Route Robot</p></span>
    </div>
  );
};

export default User;

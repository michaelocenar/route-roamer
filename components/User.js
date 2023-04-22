import { React, useEffect } from 'react';
import styles from "/components/User.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const User = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div className={styles.User}>
      <span>
        <img src="https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg" className={styles.userImage} />
      </span>
      <div className={styles.userText}>
        <div className="col-md-12">
          <div className={`${styles.userInfo} table-responsive`}>
            <table className="table table-user-information">
              <tbody>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-asterisk text-primary"></span>
                      User ID
                    </strong>
                  </td>
                  <td style={{ color: "#FF0000" }}>1234</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-user"></span>
                      Username
                    </strong>
                  </td>
                  <td>TravelBot</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-cloud text-primary"></span>
                      First Name
                    </strong>
                  </td>
                  <td>Route</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-cloud text-primary"></span>
                      Last Name
                    </strong>
                  </td>
                  <td>Roamer</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-cloud text-primary"></span>
                      Email
                    </strong>
                  </td>
                  <td>travelbot@me.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

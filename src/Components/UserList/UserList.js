import React from "react";

import Card from "../UI/Card";
import UserBox from "./UserBox";
import styles from "./UserList.module.css"

const UserList = props => {
  if (props.usersData.length > 0) {
    return (
      <Card>
        {props.usersData.map(user => (
          <UserBox
            name={user.name}
            age={user.age}
            key={user.id}
          />
        ))}
      </Card>
    );
  }

  return (
    <Card>
      <div className={styles.wrapper}>
        <p>Sorry, there is no user to render!</p>
      </div>
    </Card>
  );
};

export default UserList;
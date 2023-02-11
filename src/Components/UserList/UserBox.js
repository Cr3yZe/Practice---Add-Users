import React from "react";

import styles from './UserBox.module.css'

const UserBox = props => {
  return (
    <div className={styles.box}>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default UserBox;
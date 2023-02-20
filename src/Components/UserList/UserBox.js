import React from "react";

import styles from './UserBox.module.css'

const UserBox = props => {
  const deleteUserHandler = event => {
    props.onDelete(event)
  };

  return (
    <div id={props.x} className={styles.box} onClick={deleteUserHandler}>
      <div>{props.name}</div>
      <div>{`${props.age} years`}</div>
    </div>
  );
};

export default UserBox;
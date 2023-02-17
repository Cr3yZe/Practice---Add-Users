import React, { useState } from "react";

import styles from './UserInputForm.module.css';

const UserInputForm = props => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const submitDataHandler = event => {
    event.preventDefault();
    
    const trimedUserName = userName.trim();

    if (!(Boolean(trimedUserName.length))) {
      props.onInvalidInput(true);
      return;
    }

    const user = {
      name: trimedUserName,
      age: `(${userAge} years)`,
      id: Math.ceil(Math.random() * 1000),
    }

    setUserName('');
    setUserAge('');
    props.onSaveUserData(user);
  };

  const getUserNameHandler = event => {
    setUserName(event.target.value);
  }

  const getUserAgeHandler = event => {
    setUserAge(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={submitDataHandler}>
      <div>
        <div>
          <label>Username</label>
          <input type="text" value={userName} onChange={getUserNameHandler} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" value={userAge} onChange={getUserAgeHandler} />
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserInputForm;
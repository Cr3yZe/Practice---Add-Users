import React, { useState } from "react";

import styles from './UserInputForm.module.css';

const UserInputForm = props => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  if (!userName && !userAge) {
    if (props.sendCurrentUserData) {
      const { name, age } = props.sendCurrentUserData;

      setUserName(name);
      setUserAge(age);
    }
  }

  const submitDataHandler = event => {
    event.preventDefault();

    const trimedUserName = userName.trim();

    const user = {
      name: trimedUserName,
      age: userAge,
      id: Math.ceil(Math.random() * 1000),
    }

    if (!(Boolean(trimedUserName.length))) {
      const message = 'Please enter a valid name and age (non-empty values).';
      props.onInvalidInput(message, user, true);
      return;
    }

    if (userAge <= 0 || userAge > 100) {
      const message = 'You have to enter a valid number(> 0 && != 0)';
      props.onInvalidInput(message, user, true);
      return;
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
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={userName} onChange={getUserNameHandler} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={userAge} onChange={getUserAgeHandler} />
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserInputForm;
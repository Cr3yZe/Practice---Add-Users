import React, { useState } from 'react';

import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import ModalError from './Components/ModalError/ModalError';
import styles from './App.module.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const saveUserData = userData => {
    console.log(userData);
    setUsers(prevState => {
      return [
        userData,
        ...prevState,
      ];
    })
  }

  const showModalErrorHandler = value => {
    setShowModal(value);
  };

  if (showModal) {
    return (
      <div className={styles.appWrapper}>
        <ModalError onChangingModal={showModalErrorHandler} />
        <UserInput onSaveUserData={saveUserData} onInvalidInput={showModalErrorHandler} />
        <UserList usersData={users} />
      </div>
    )
  }

  return (
    <div className={styles.appWrapper}>
      <UserInput onSaveUserData={saveUserData} onInvalidInput={showModalErrorHandler} />
      <UserList usersData={users} />
    </div>
  );
}

export default App;

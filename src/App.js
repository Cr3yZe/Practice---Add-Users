import React, { useState } from 'react';

import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import ModalError from './Components/ModalError/ModalError';
import styles from './App.module.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // const [currentUserData, setCurrentUserData] = useState({});

  const saveUserData = userData => {
    setUsers(prevState => {
      return [
        userData,
        ...prevState,
      ];
    })
  }

  const onDeletingUser = data => {
    const newUsers = users.filter(user => user.id !== parseInt(data.target.id));
    setUsers(newUsers);
  }

  const showModalErrorHandler = (...values) => {
    const [message, userData, value] = values;

    // setCurrentUserData(userData);
    setShowModal(value);
    setErrorMessage(message);
  };

  return (
    <div className={styles.appWrapper}>
      {showModal ? <ModalError onChangingModal={showModalErrorHandler} modalErrorMessage={errorMessage} /> : false}
      <UserInput onSaveUserData={saveUserData} onInvalidInput={showModalErrorHandler} />
      <UserList usersData={users} onDelete={onDeletingUser} />
    </div>
  );
}

export default App;

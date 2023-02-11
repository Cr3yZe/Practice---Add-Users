import React, { useState } from 'react';

import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import styles from './App.module.css'

function App() {
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


  return (
    <div className={styles.appWrapper}>
      <UserInput onSaveUserData={saveUserData} />
      <UserList usersData={users} />
    </div>
  );
}

export default App;

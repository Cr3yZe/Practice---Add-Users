import React from "react";

import Card from "../UI/Card";
import UserInputForm from "./UserInputForm";

const UserInput = props => {
  return (
    <Card>
      <UserInputForm onSaveUserData={props.onSaveUserData} /> 
    </Card>
  );
};

export default UserInput;
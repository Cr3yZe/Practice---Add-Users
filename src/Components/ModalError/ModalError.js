import React from "react";

import Card from "../UI/Card";
import styles from "./ModalError.module.css";

const ModalError = props => {
  const clickOkayHandler = event => {
    if (event.target.id === 'modal' ||
      event.target.type === 'button') {
      props.onChangingModal(false);
    }
  };

  return (
    <div onClick={clickOkayHandler} id="modal" className={styles['card-error__wrapper']}>
      <Card styles={styles['card-error']}>
        <div className={styles['invalid-input__header']}>
          <h3>Invalid Input</h3>
        </div>
        <div className={styles['invalid-input__message']}>
          <p>{props.modalErrorMessage}</p>
          <button type="button" autoFocus={true}>Okay</button>
        </div>
      </Card>
    </div>
  );
};

export default ModalError;
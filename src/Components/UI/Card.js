import React from "react";

import styles from './Card.module.css'

const Card = props => {
  const bondelClasses = `${styles.card} ${props.styles}`

  return (
    <div className={bondelClasses}>{props.children}</div>
  );
};

export default Card;
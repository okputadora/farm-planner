import React from 'react';
import classes from './formCard.css';
const formCard = props => (
  <div className={classes[props.type]}>{props.children}</div>
)

export default formCard;

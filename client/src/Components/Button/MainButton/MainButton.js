import React from 'react';
import classes from './mainButton.css';
const mainButton = props => (
  <div className={classes.MainButton}>{props.children}</div>
)

export default mainButton;

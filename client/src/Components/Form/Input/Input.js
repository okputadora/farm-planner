import React from 'react';
import classes from './input.css';
const input = props => {
  return (
    <input
      type={props.type}
      className={classes.Input}
      placeholder={props.placeholder}
      onChange={props.change}
      name={props.name}
    />
  )
}

export default input;

import React from 'react';
import classes from './input.css';
const input = props => {
  return (
    <input type={props.type} className={classes.Input} placeholder={props.placeholder}/>
  )
}

export default input;

import React from 'react';
import classes from './banner.css'
import tractor from './tractor.jpg';
const banner = props => {
  return (
    <div className={classes.Banner}>
      <div className={classes.Text}>{props.text}</div>
    </div>
  )
}

export default banner;

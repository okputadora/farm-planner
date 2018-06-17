import React from 'react';
import classes from './dropDownItem.css';
const dropDownItem = props => (<div className={classes[props.type]}></div>);
export default dropDownItem;

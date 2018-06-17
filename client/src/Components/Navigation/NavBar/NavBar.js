import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navBar.css';
import Logo from '../../Logo/Logo';

const NavBar = props => {
  return (
    <nav class={classes.NavBar}>
      <Logo />
      <div className={classes.Links}>
        <Link className={classes.Link} to="#">About</Link>
        <Link className={classes.Link} to="#">Tutorial</Link>
        <Link className={classes.Link} to="#">Pricing</Link>
      </div>
    </nav>
  )
}

export default NavBar;

import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import Input from '../../../Components/Form/Input/Input';
import Button from '../../../Components/Button/MainButton/MainButton';
import classes from './loginSignup.css';
class LoginSignUp extends Component {
  render(){
    return (
      <Aux>
        <NavBar />
        <div className={classes.Login}>
          <h3>Login/Signup</h3>
          <div className={classes.LoginCard}>
            <Input placeholder="First Name" type="text"/>
            <Input placeholder="Last Name" type="text"/>
            <Input placeholder="email" type="email"/>
            <Input placeholder="password" type="password"/>
            <Button>Start Your Season</Button>
          </div>
        </div>
      </Aux>
    )
  }
}

export default LoginSignUp;

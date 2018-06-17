import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import Input from '../../../Components/Form/Input/Input';
import Button from '../../../Components/Button/MainButton/MainButton';
import classes from './loginSignup.css';
class LoginSignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  }

  onChangeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }


  render(){
    return (
      <Aux>
        <NavBar />
        <div className={classes.Login}>
          <h3>Login/Signup</h3>
          <div className={classes.LoginCard}>
            <Input change={this.onChangeHandler} name="firstName" placeholder="First Name" type="text"/>
            <Input change={this.onChangeHandler} name="lastName" placeholder="Last Name" type="text"/>
            <Input change={this.onChangeHandler} name="username" placeholder="username" type="text"/>
            <Input change={this.onChangeHandler} name="email" placeholder="email" type="email"/>
            <Input change={this.onChangeHandler} name="password" placeholder="password" type="password"/>
            <Button>Start Your Season</Button>
          </div>
        </div>
      </Aux>
    )
  }
}

export default LoginSignUp;

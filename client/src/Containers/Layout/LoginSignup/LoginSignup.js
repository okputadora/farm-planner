import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import FormCard from '../../../Components/Form/FormCard/FormCard';
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

  onChangeHandler = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  loginAction = () => {
    console.log("dispatch action")
    // dispatch action to redux
    // if successful signup go to
    this.props.history.push('/planSeason');
    // if successful login go to dashboard
  }


  render(){
    return (
      <Aux>
        <NavBar />
        <div className={classes.Login}>
          <h3>Login/Signup</h3>
          <FormCard type="LoginCard">
            <Input change={this.onChangeHandler} name="firstName" placeholder="First Name" type="text"/>
            <Input change={this.onChangeHandler} name="lastName" placeholder="Last Name" type="text"/>
            <Input change={this.onChangeHandler} name="username" placeholder="username" type="text"/>
            <Input change={this.onChangeHandler} name="email" placeholder="email" type="email"/>
            <Input change={this.onChangeHandler} name="password" placeholder="password" type="password"/>
            <Button click={this.loginAction}>Start Your Season</Button>
          </FormCard>
        </div>
      </Aux>
    )
  }
}

export default LoginSignUp;

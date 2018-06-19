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
    const inputs = Object.keys(this.state).map(input => {
      let type = (input === 'password'|| input === 'email') ? input : 'text'
      return <Input change={this.onChangeHandler} name={input} placeholder={type} type={type}/>
    })
    return (
      <Aux>
        <NavBar />
        <div className={classes.Login}>
          <h3>Login/Signup</h3>
          <FormCard type="LoginCard">
            {inputs}
            <Button click={this.loginAction}>Start Your Season</Button>
          </FormCard>
        </div>
      </Aux>
    )
  }
}

export default LoginSignUp;

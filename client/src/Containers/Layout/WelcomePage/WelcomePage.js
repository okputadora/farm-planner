import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
// import { Link } from 'react-router-dom';
import classes from './welcomePage.css';
// import image from './Assets/mern.png';
// import api from '../../utils/apiRequests';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import Banner from '../../../Components/Banner/Banner';
class WelcomePage extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <Banner text="Farm Planner"/>
        <div className={classes.Description}>
          <div className={classes.Features}>
            
          </div>
            </div>
      </Aux>
    )
  }
};

export default WelcomePage;

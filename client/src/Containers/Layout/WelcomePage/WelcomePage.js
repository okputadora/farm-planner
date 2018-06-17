import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
// import { Link } from 'react-router-dom';
// import classes from './layout.css';
// import image from './Assets/mern.png';
// import api from '../../utils/apiRequests';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import Banner from '../../../Components/Banner/Banner';
class WelcomePage extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <Banner source="./tractor.jpg"/>
      </Aux>
    )
  }
};

export default WelcomePage;

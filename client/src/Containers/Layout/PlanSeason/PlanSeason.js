import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import FormCard from '../../../Components/Form/FormCard/FormCard';
import DropDown from '../../../Components/Form/DropDown/DropDown';
import classes from './planSeason.css';
class PlanSeason extends Component {
  render(){
    return (
      <Aux>
        <NavBar />
        <div className={classes.PlanSeason}>
          <FormCard type="SeasonPlan">
            <Dropdown />
          </FormCard>
        </div>
      </Aux>
    )
  }
}


export default PlanSeason;

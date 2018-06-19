import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import FormCard from '../../../Components/Form/FormCard/FormCard';
import DropDown from '../../../Components/Form/DropDown/DropDown';
import classes from './planSeason.css';
const farmTypes = ['CSA', 'Market Gardener', 'Wholesale'];
class PlanSeason extends Component {
  state = {

  }
  render(){
    return (
      <Aux>
        <NavBar />
        <div className={classes.PlanSeason}>
          <FormCard type="SeasonPlan">
            <DropDown title="Tell us what kind of farmer you are" list={farmTypes}/>
          </FormCard>
        </div>
      </Aux>
    )
  }
}


export default PlanSeason;

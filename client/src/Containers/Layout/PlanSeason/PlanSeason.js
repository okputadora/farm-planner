import React, { Component } from 'react';
import Aux from '../../../Components/HOC/Auxil';
import NavBar from '../../../Components/Navigation/NavBar/NavBar';
import FormCard from '../../../Components/Form/FormCard/FormCard';
import DropDown from '../../../Components/Form/DropDown/DropDown';
import Button from '../../../Components/Button/MainButton/MainButton'
import classes from './planSeason.css';
const farmTypes = ['CSA', 'Market Gardener', 'Wholesale'];
class PlanSeason extends Component {
  state = {

  }
  render(){
    const list = farmTypes.map(type => {
      return <Button>{type}</Button>
    })
    return (
      <Aux>
        <NavBar />
        <FormCard>
          <div>Tell us what kind of farmer you are</div>
          <div className={classes.BtnGrp}>
            {list}
          </div>
        </FormCard>
      </Aux>
    )
  }
}


export default PlanSeason;

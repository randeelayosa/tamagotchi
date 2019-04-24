import React from 'react';
import PropTypes from 'prop-types'

function Pet(props){
  return(
    <div>
      <p>Energy Level: {props.energy}</p>
      <p>Hunger Level: {props.hunger}</p>
      <p>Fatigue Level: {props.fatigue}</p>
    </div>
  );
};

Pet.propTypes = {
  energy: PropTypes.number,
  hunger: PropTypes.number,
  fatigue: PropTypes.number
}

export default Pet;

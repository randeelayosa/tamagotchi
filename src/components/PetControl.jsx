import React from 'react';
import PropTypes from 'prop-types';
import player from '../assets/images/chicken.png';
import Pet from './Pet';

function PetControl(){
  const chicken = {
    energy: '100',
    hunger: '100',
    fatigue: '100'
  };
  return(
    <div>
      <Pet/>
      <img src={player}/>
      <style jsx>{`
        img {
          width: 25%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default PetControl;

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
        div{
          border: 3px solid yellow;
          border-radius: 20px;
          margin-top: 50px;
          width: 575px;
          height: 500px;
        }
        img {
          width: 20%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default PetControl;

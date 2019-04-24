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
          border-radius: 20px;
          background-color: rgb(156, 164, 160);
          box-shadow: inset 0px 0px 15px 12px rgb(111, 114, 113);
          width: 90%;
          height: 85%;
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

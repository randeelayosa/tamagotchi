import React from 'react';
import PropTypes from 'prop-types';

function Pet(props){
  return(
    <div>
      <p>Activity Level: <span>{props.activity}</span></p>
      <p>Hunger Level: <span>{props.hunger}</span></p>
      <p>Happiness Level: <span>{props.happiness}</span></p>
      <p>HEALTH: <span>{props.health}</span></p>
      <style jsx>{`
        div{
          display: flex;
          flex-flow: row no-wrap;
          justify-content: space-around;
        }
        p {
          display: flex;
          flex-flow: column nowrap;
          text-align: center;
        }
        span {
          color: lightgreen;
        }
        @media only screen and (max-width: 768px){
          p{
            font-size: .7em;
          }
        }
      `}</style>
    </div>
  );
}

Pet.propTypes = {
  activity: PropTypes.number,
  hunger: PropTypes.number,
  happiness: PropTypes.number,
  health: PropTypes.number
};

export default Pet;

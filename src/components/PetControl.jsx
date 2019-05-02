import React from 'react';
import player from '../assets/images/chicken.png';
import Pet from './Pet';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PetControl(props){

  function componentDidMount() {
    const { dispatch } = props;
    setInterval(() => {
      const action = {
        type: 'UPDATE_TAMAGOTCHI',
        activity: props.sprite.activity -= 1,
        hunger: props.sprite.hunger -= 4,
        happiness: props.sprite.happiness -= 2
      };
      dispatch(action);
    },5000
    );
  }



  return(
    <div onClick={componentDidMount} className='mainDisplay'>
      <div className='healthMeter'>
        <Pet
          activity={props.sprite.activity}
          hunger={props.sprite.hunger}
          happiness={props.sprite.happiness}
          health={props.sprite.health}/>
      </div>
      <div className='petIcon'>
        <div className='petPoo'>
          <FontAwesomeIcon icon="poo"/>
        </div>
        <img src={player}/>
        <div className='petPlay'>
          <FontAwesomeIcon icon="baseball-ball"/>
        </div>
      </div>
      <div className='healthIcons'>
        <Icons sprite={props.sprite}/>
      </div>
      <style jsx>{`
        .mainDisplay{
          border-radius: 20px;
          background-color: rgb(156, 164, 160);
          box-shadow: inset 0px 0px 15px 12px rgb(111, 114, 113);
          width: 90%;
          height: 85%;
          display: flex;
          flex-direction: column;
        }
        .petIcon{
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: row nowrap;
        }
        .petPoo{
          height: 80%;
          width: 20%;
          font-size: 3.5em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .petPlay{
          height: 80%;
          width: 20%;
          font-size: 3.5em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        img {
          width: auto;
          height: 85%;
        }
        .healthIcons{
          height: 18%;
        }
        @media only screen and (max-width: 768px){
          .petPoo{
            font-size: .8em;
          }
          .petPlay{
            font-size: .8em;
          }
        }
        @media only screen and (max-width: 425px){
          .petPoo{
            font-size: 1em;
          }
          .petPlay{
            font-size: 1em;
          }
        }
        `}</style>
    </div>
  );
}


PetControl = connect()(PetControl);

export default PetControl;

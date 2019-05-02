import React from 'react';
import player from '../assets/images/chicken.png';
import Pet from './Pet';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { keyframes } from 'styled-components';

function PetControl(props){
  console.log('buttonIdprops', props.buttons.buttonId)

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

  // const makePoo = keyframes`
  //   to {
  //     tranform: translateX(-10);
  //   }
  // `;

  let spritePoop;
  let spriteEat;
  let spritePlay;

  if(props.buttons.buttonId === 0) {
    spritePoop = {
      opacity: '1',
    };
  } else if(props.buttons.buttonId === 1) {
    spriteEat = {
      opacity: '1'
    };
  } else if(props.buttons.buttonId === 2) {
    spritePlay = {
      opacity: '1'
    };
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
        <div style={spritePoop} className='petPoo'>
          <FontAwesomeIcon icon="poo"/>
        </div>
        <img src={player}/>
        <div className='eatPlay'>
          <div style={spriteEat} className='petEat'>
            <FontAwesomeIcon icon="drumstick-bite"/>
          </div>
          <div style={spritePlay} className='petPlay'>
            <FontAwesomeIcon icon="circle"/>
          </div>
        </div>
      </div>
      <div className='healthIcons'>
        <Icons icons={props.icons}/>
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
          opacity: .15;
          animation: poopingAnimation 5s linear infinite;
        }
        .eatPlay{
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          height: 100%;
          width: 20%;
        }
        .petEat{
          font-size: 3.5em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          opacity: .15;
        }
        .petPlay{
          font-size: 3.5em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          opacity: .15;
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
        @keyframes poopingAnimation {
          0% {}
          100% {transform: translateX(-50px);}
        }

        }
        `}</style>
    </div>
  );
}

PetControl.propTypes = {
  buttons: PropTypes.object
}

export default connect()(PetControl);

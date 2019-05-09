import React from 'react';
import player from '../assets/images/chicken.png';
import Pet from './Pet';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PetControl(props){


    if(props.sprite.active == true) {
      const { dispatch } = props;
      setInterval(() => {
        const action = {
          type: 'UPDATE_TAMAGOTCHI',
          activity: props.sprite.activity -= 1,
          hunger: props.sprite.hunger -= 4,
          happiness: props.sprite.happiness -= 2,
          active: props.sprite.active
        };
        dispatch(action);
      },10000);
    }

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
    <div className='mainDisplay'>
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
          img{
            width: auto;
            height: 85%;
          }
          .healthIcons{
            height: 18%;
          }
          @media only screen and (max-width: 768px){
            .petPoo, .petPlay, .petEat{
              font-size: .8em;
            }
          }
          @media only screen and (max-width: 425px){
            .petPoo, .petPlay, .petEat{
              font-size: 1em;
            }
            .petPoo{
              animation: poopingAnimationSmall 5s linear infinite;
            }
          }
          @keyframes poopingAnimation {
            0% {transform: translateX(70px);}
            100% {transform: translateX(-35px);}
          }
          @keyframes poopingAnimationSmall {
            0% {transform: translateX(45px);}
            100% {transform: translateX(-15px);}
          }

        }
        `}</style>
    </div>
  );
}

PetControl.propTypes = {
  buttons: PropTypes.object,
  icons: PropTypes.object,
  sprite: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(PetControl);

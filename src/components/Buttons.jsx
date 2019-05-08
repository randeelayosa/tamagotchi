import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PetControl from './PetControl';


function Buttons(props){
  let numberOfClicks = -1;
  let iconNumberOfClicks = -1;

  function click() {
    if (numberOfClicks == 2){
      numberOfClicks = 0;
      iconNumberOfClicks = 0;
    } else {
      numberOfClicks++;
      iconNumberOfClicks++;
    }
  }

  function handleButtonASelect() {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_BUTTON',
      buttonId: numberOfClicks
    };
    dispatch(action);
  }

  function handleButtonCSelect() {
    const { dispatch } = props;
    const action = {
      type: 'CREATE_TAMAGOTCHI',
    };
    dispatch(action);
  }

  function handleIconASelect() {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_ICON',
      iconId: iconNumberOfClicks
    };
    dispatch(action);
  }

  function handleIconChange() {
    click();
    handleIconASelect();
  }

  function startStop() {
    console.log('initial state', props.sprite);
    if(props.sprite.active === null) {
      handleButtonCSelect();
      props.componentDidMount();
      console.log('handleC activated');

    } else if(props.sprite.active === false){
      const { dispatch } = props;
      const action = {
        type: 'ACTIVATE_TAMAGOTCHI',
        activity: props.sprite.activity,
        hunger: props.sprite.hunger,
        happiness: props.sprite.happiness,
        active: true
      };
      console.log('turned true');
      dispatch(action);

    } else if(props.sprite.active === true) {
      const { dispatch } = props;
      const action = {
        type: 'DEACTIVATE_TAMAGOTCHI',
        activity: props.sprite.activity,
        hunger: props.sprite.hunger,
        happiness: props.sprite.happiness,
        active: false
      };
      console.log('turned false');
      dispatch(action);
    }
  }


  return(
    <div className='buttonPosition'>
      <div className='toolTip'>
        <button onClick={handleIconChange}></button>
        <span className='button0 toolTipText'>A<br/><br/>Toggle Icons</span>
      </div>
      <div className='toolTip secondButton'>
        <button onClick={handleButtonASelect}></button>
        <span className='button1 toolTipText'>B<br/><br/>Select</span>
      </div>
      <div className='toolTip'>
        <button onClick={startStop}></button>
        <span className='button2 toolTipText'>C<br/><br/>Home<br/>Start/Stop</span>
      </div>
      <style jsx>{`
          .buttonPosition{
            display: flex;
            justify-content: space-around;
            width: 60%;
            height: 15%;
            margin-top: 1%;
          }
          span{
            font-size: .8em;
          }
          .toolTip{
            position: relative;
            display: inline-block;
            padding: 5px;
            width: 20%;
            height: 65%;
          }
          .toolTipText{
            visibility: hidden;
            width: 100%;
            height: 50%;
            background-color: rgba(251,227,58,.4);
            color: black;
            text-align: center;
            padding: 3% 0;
            border-radius: 8%;
            position: absolute;
            z-index: 1;
          }
          .toolTip:hover .toolTipText{
            visibility: visible;
          }
          button{
            width: 100%;
            height: 100%;
            background-color: blue;
            border: none;
            border-radius: 50%;
            box-shadow: 8px 8px 50px black, inset 5px 2px 5px rgb(104, 91, 255);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .secondButton{
            display: flex;
            align-self: flex-end;
          }
          button:hover{
            cursor: pointer;
          }
          @media only screen and (max-width: 768px){
            div{
              width: 250px;
              height: 80px;
            }
          }
          @media only screen and (max-width: 425px){
            div{
              width: 150px;
              height: 45px;
              margin-top: 3%;
            }
          }
          `}</style>
    </div>

  );
}

//
// const mapStateToProps = state => {
//   console.log('start', mapStateToProps);
//   console.log('start state', state);
//   return {
//     tamagotchi: state.tamagotchi,
//     buttons: state.buttons,
//     icons: state.icons
//   };
// }
// console.log('end',mapStateToProps);

Buttons.propTypes = {
  dispatch: PropTypes.func,
  sprite: PropTypes.object
}

export default connect()(Buttons);

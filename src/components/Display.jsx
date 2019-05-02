import React from 'react';
import PropTypes from 'prop-types';
import PetControl from './PetControl';
import Buttons from './Buttons';
import logo from '../assets/images/logo2.png';

function Display(props){


  return(
    <div className='egg'>
      <div className='logo'>
        <img src={logo}/>
      </div>
      <div className='displayBorder'>
        <div className='displayFrame'>
          <PetControl sprite={props.sprite} buttons={props.buttons} icons={props.icons}/>
        </div>
      </div>
      <Buttons/>
      <style jsx>{`
          .egg {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 55% 55% 50% 50%;
            width: 800px;
            height: 1000px;
            background: radial-gradient(rgb(233,62,188) 55%, rgb(102,27,82));
            box-shadow: 1px 1px 75px black, inset 1px 1px 12px white;
          }
          .logo{
            filter: invert(100%);
            width: 50%;
            margin-top: 80px;
          }
          img{
            width: 100%;
          }
          .displayBorder{
            background-color: rgba(102,27,82,.6);
            width: 76%;
            height: 58.5%;
            display: flex;
            justify-content: center;
            align-items: center;
            clip-path: polygon(4% 0, 18% 4%, 44% 0, 71% 5%, 100% 1%, 97% 29%, 100% 46%, 96% 69%, 100% 100%, 68% 97%, 41% 100%, 19% 95%, 0 100%, 2% 68%, 0 37%);
          }
          .displayFrame{
            background-color: rgb(251,227,58);
            width: 97.8%;
            height: 98%;
            display: flex;
            justify-content: center;
            align-items: center;
            clip-path: polygon(4% 0, 18% 4%, 44% 0, 71% 5%, 100% 1%, 97% 29%, 100% 46%, 96% 69%, 100% 100%, 68% 97%, 41% 100%, 19% 95%, 0 100%, 2% 68%, 0 37%);
          }
          @media only screen and (max-width: 768px){
            .egg{
              width: 500px;
              height: 625px;
            }
            .logo{
              margin-top: 12%;
            }
          }
          @media only screen and (max-width: 425px){
            .egg{
              width: 280px;
              height: 350px;
            }
          }
          `}</style>
    </div>
  );
}

Display.propTypes = {
  chicken: PropTypes.object,
  buttons: PropTypes.object
};

export default Display;

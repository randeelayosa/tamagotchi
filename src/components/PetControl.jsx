import React from 'react';
import player from '../assets/images/chicken.png';
import Pet from './Pet';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PetControl(){
  const chicken = {
    activity: '100',
    hunger: '100',
    happiness: '100',
    health: '300'
  };
  return(
    <div className='mainDisplay'>
      <div className='healthMeter'>
        <Pet
          activity={chicken.activity}
          hunger={chicken.hunger}
          happiness={chicken.happiness}
          health={chicken.health}/>
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
        <Icons/>
      </div>
      <style jsx>{`
          border: 1px solid blue;
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
            align-items: center;
            flex-flow: row nowrap;
          }
          .petPoo{
            border: 1px solid black;
            height: 80%;
            width: 20%;
            font-size: 3.5em;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          .petPlay{
            border: 1px solid black;
            height: 80%;
            width: 20%;
            font-size: 3.5em;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          .petPlay{
            border: 1px solid black;
            height: 80%;
            width: 20%;
          }
          img {
            width: auto;
            height: 80%;
          }
          .healthIcons{
            height: 18%;
          }
        `}</style>
    </div>
  );
}

export default PetControl;

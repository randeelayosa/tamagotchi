import React from 'react';
import player from '../assets/images/chicken.png';
import Pet from './Pet';
import Icons from './Icons';

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
        <img src={player}/>
      </div>
      <div className='healthIcons'>
        <Icons/>
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
            align-items: center;
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

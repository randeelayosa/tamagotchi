import React from 'react';
import Pet from './Pet';
import PetControl from './PetControl';
import logo from '../assets/images/logo2.png';

function Display(){
  return(
    <div className='egg'>
      <div className='logo'>
        <img src={logo}/>
      </div>
      <PetControl/>
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
          border: 1px solid white;
          margin-top: 70px;
        }
        img{
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Display;

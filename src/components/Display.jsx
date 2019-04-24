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
      <div className='displayBorder'>
        <div className='displayFrame'>
          <PetControl/>
        </div>
      </div>
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
          width: 620px;
          height: 580px;
          margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(4% 0, 18% 4%, 44% 0, 71% 5%, 100% 1%, 97% 29%, 100% 46%, 96% 69%, 100% 100%, 68% 97%, 41% 100%, 19% 95%, 0 100%, 2% 68%, 0 37%);
        }
        .displayFrame{
          background-color: rgb(251,227,58);
          width: 610px;
          height: 570px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(4% 0, 18% 4%, 44% 0, 71% 5%, 100% 1%, 97% 29%, 100% 46%, 96% 69%, 100% 100%, 68% 97%, 41% 100%, 19% 95%, 0 100%, 2% 68%, 0 37%);
        }
      `}</style>
    </div>
  );
}

export default Display;

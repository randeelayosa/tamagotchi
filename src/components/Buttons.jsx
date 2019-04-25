import React from 'react';

function Buttons(){



  return(
    <div>
      <button></button>
      <button className='secondButton'></button>
      <button></button>
      <style jsx>{`
        div{
          display: flex;
          justify-content: space-around;
          width: 60%;
          height: 15%;
          margin-top: 1%;
        }
        button{
          width: 20%;
          height: 60%;
          background-color: blue;
          border: none;
          border-radius: 50%;
          box-shadow: 8px 8px 50px black, inset 5px 2px 5px rgb(104, 91, 255);
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



export default Buttons;

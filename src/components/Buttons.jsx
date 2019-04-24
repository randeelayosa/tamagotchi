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
          height: 130px;
          margin-top: 20px;
        }
        button{
          width: 80px;
          height: 80px;
          background-color: blue;
          border: none;
          border-radius: 50%;
          box-shadow: 8px 8px 50px black, inset 5px 2px 5px rgb(104, 91, 255);
        }
        .secondButton{
          display: flex;
          align-self: flex-end;
        }
      `}</style>
    </div>
  );
}

export default Buttons;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icons(){
  return(
    <div>
      <p className='toilet'><FontAwesomeIcon icon="toilet-paper"/></p>
      <p className='eat'><FontAwesomeIcon icon="utensils"/></p>
      <p className='quidditch'><FontAwesomeIcon icon="quidditch"/></p>
      <style jsx>{`
        div{
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        p{
          font-size: 3.5em;
          text-align: center;
        }
        @media only screen and (max-width: 768px){
          p{
            font-size: 2em;
          }
        }
      `}</style>
    </div>
  )
}

export default Icons;

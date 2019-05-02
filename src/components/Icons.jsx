import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

library.add(faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall);

function Icons(props){
  console.log('icons', props.sprite);




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
          color: rgb(0,0,0);
          opacity: 1;
        }
        @media only screen and (max-width: 768px){
          p{
            font-size: 2em;
          }
        }
        @media only screen and (max-width: 425px){
          p{
            font-size: .9em;
          }
        }
      `}</style>
    </div>
  );
}


export default connect()(Icons);

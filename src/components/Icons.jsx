import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faUtensils, faToiletPaper, faQuidditch, faCircle, faDrumstickBite} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

library.add(faPoo, faUtensils, faToiletPaper, faQuidditch, faCircle, faDrumstickBite);

function Icons(props){
  let firstIcon;
  let secondIcon;
  let thirdIcon;

  if(props.icons.iconId === 0) {
    firstIcon = {
      opacity: '1'
    };

  } else if (props.icons.iconId === 1) {
    secondIcon = {
      opacity: '1'
    };

  } else if (props.icons.iconId === 2) {
    thirdIcon = {
      opacity: '1'
    };

  }


  return(
    <div>
      <p style={firstIcon} className='toilet'><FontAwesomeIcon icon="toilet-paper"/></p>
      <p style={secondIcon} className='eat'><FontAwesomeIcon icon="utensils"/></p>
      <p style={thirdIcon} className='quidditch'><FontAwesomeIcon icon="quidditch"/></p>
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
          opacity: .15;
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

Icons.propTypes = {
  icons: PropTypes.object
};


export default connect()(Icons);

import React from 'react';
import Display from './Display';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall } from '@fortawesome/free-solid-svg-icons';

library.add(faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall);

function App(){

  return(
    <div>
      <Display/>
      <style jsx>{`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 98vh;
          }
        `}</style>
    </div>
  );

}

export default App;

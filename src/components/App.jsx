import React from 'react';
import Display from './Display';

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

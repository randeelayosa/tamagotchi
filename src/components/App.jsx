import React from 'react';
import Display from './Display';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall } from '@fortawesome/free-solid-svg-icons';

library.add(faPoo, faUtensils, faToiletPaper, faQuidditch, faBaseballBall);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chicken: {
        activity: 100,
        hunger: 100,
        happiness: 100,
        health: 300
      }
    }
  }

  componentDidMount() {
    this.updateChickenProperties = setInterval(() =>
    this.decreasingChickenProperties(),
    2000
    );
  }

  decreasingChickenProperties() {
    const newChicken = Object.assign({}, this.state.chicken);
    newChicken.activity -= 1;
    newChicken.hunger -= 1;
    newChicken.happiness -= 1;
    newChicken.health = newChicken.activity + newChicken.hunger + newChicken.happiness;
    this.setState({chicken: newChicken})
  }

  render(){
    return(
      <div>
        <Display chicken={this.state.chicken}/>
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
}

export default App;

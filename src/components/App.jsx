import React from 'react';
import Display from './Display';

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
    };
    this.handleIncreaseActivity = this.handleIncreaseActivity.bind(this);
    this.handleIncreaseHunger = this.handleIncreaseHunger.bind(this);
    this.handleIncreaseHappiness = this.handleIncreaseHappiness.bind(this);
  }

  componentDidMount() {
    this.updateChickenProperties = setInterval(() =>
      this.decreasingChickenProperties(),
    3000
    );
  }

  decreasingChickenProperties() {
    const newChicken = Object.assign({}, this.state.chicken);
    newChicken.activity -= 1;
    newChicken.hunger -= 1;
    newChicken.happiness -= 1;
    newChicken.health = newChicken.activity + newChicken.hunger + newChicken.happiness;
    this.setState({chicken: newChicken});
  }

  handleIncreaseActivity() {
    const newChicken = Object.assign({}, this.state.chicken);
    newChicken.activity += 5;
    newChicken.health += 5;
    this.setState({chicken: newChicken});
  }

  handleIncreaseHunger() {
    const newChicken = Object.assign({}, this.state.chicken);
    newChicken.hunger += 5;
    newChicken.health += 5;
    this.setState({chicken: newChicken});
  }

  handleIncreaseHappiness() {
    const newChicken = Object.assign({}, this.state.chicken);
    newChicken.happiness += 5;
    newChicken.health += 5;
    this.setState({chicken: newChicken});
  }

  render(){
    return(
      <div>
        <Display chicken={this.state.chicken} onIncreaseActivity={this.handleIncreaseActivity} onIncreaseHunger={this.handleIncreaseHunger} onIncreaseHappiness={this.handleIncreaseHappiness}/>
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

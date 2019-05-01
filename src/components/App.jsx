import React from 'react';
import Display from './Display';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <Route path='/' render={() => <Display chicken={this.props.buttonsReducer}/>} />


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

App.propTypes = {
  buttonsReducer: PropTypes.object
};

const mapStateToProps = state => {
  return {
    buttonsReducer: state.buttonsReducer
  };
};

export default withRouter(connect(mapStateToProps)(App));

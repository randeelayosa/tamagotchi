import React from 'react';
import Display from './Display';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  // decreasingChickenProperties(props) {
  //   console.log(props)
  //   const { dispatch } = this.props.tamagotchiReducer.chicken;
  //   const action = {
  //     type: 'UPDATE_TAMAGOTCHI',
  //     chicken: {
  //       activity: activity - 1,
  //       hunger: hunger - 1,
  //       happiness: happiness - 1,
  //       health: activity + happiness + hunger
  //     }
  //   };
  //   dispatch(action);
  //
  // }


  // handleIncreaseActivity() {
  //   const newChicken = Object.assign({}, this.props.tamagotchiReducer.chicken);
  //   newChicken.activity += 5;
  //   newChicken.health += 5;
  //   this.setState({chicken: newChicken});
  // }
  //
  // handleIncreaseHunger() {
  //   const newChicken = Object.assign({}, this.props.tamagotchiReducer.chicken);
  //   newChicken.hunger += 5;
  //   newChicken.health += 5;
  //   this.setState({chicken: newChicken});
  // }
  //
  // handleIncreaseHappiness() {
  //   const newChicken = Object.assign({}, this.props.tamagotchiReducer.chicken);
  //   newChicken.happiness += 5;
  //   newChicken.health += 5;
  //   this.setState({chicken: newChicken});
  // }

  componentDidMount() {
    console.log(this.props.tamagotchiReducer.chicken);
    this.updateChickenProperties = setInterval(() =>
    // this.decreasingChickenProperties(),
      5000
    );
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
  tamagotchiReducer: PropTypes.object,
  buttonsReducer: PropTypes.object,
  decreasingChickenProperties: PropTypes.func
};

const mapStateToProps = state => {
  return {
    tamagotchiReducer: state.tamagotchiReducer,
    buttonsReducer: state.buttonsReducer
  };
};

export default withRouter(connect(mapStateToProps)(App));

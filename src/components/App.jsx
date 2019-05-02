import React from 'react';
import Display from './Display';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

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




  render(){
    return(
      <div>
        <Route path='/' render={() => <Display chicken={this.props.tamagotchiReducer} button={this.props.buttonsReducer}/>} />
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
};

const mapStateToProps = state => {
  return {
    tamagotchiReducer: state.tamagotchiReducer,
    buttonsReducer: state.buttonsReducer
  };
};

export default withRouter(connect(mapStateToProps)(App));

import React from 'react';
import Display from './Display';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
  }






  // handleIncreaseActivity() {
  //   const newChicken = Object.assign({}, this.props.tamagotchi.chicken);
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
    console.log('app', this.props);
    return(
      <div>
        <Route path='/' render={() => <Display sprite={this.props.tamagotchi} button={this.props.buttons}/>} />
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

//tamagotchi is the state slice that is being passed to Display seen above
const mapStateToProps = state => {
  return {
    tamagotchi: state.tamagotchi,
    buttons: state.buttons,
    icons: state.icons
  };
};

export default withRouter(connect(mapStateToProps)(App));

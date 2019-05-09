import React from 'react';
import Display from './Display';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('this is props: ', this.props.tamagotchi);
    return(
      <div>
        <Route path='/' render={() => <Display sprite={this.props.tamagotchi} buttons={this.props.buttons} icons={this.props.icons}/>} />
        <style jsx>{`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 98vh;
            font-family: Arial, sans serif;
          }
          `}</style>
      </div>
    );
  }
}


App.propTypes = {
  tamagotchi: PropTypes.object,
  buttons: PropTypes.object,
  icons: PropTypes.object,
  dispatch: PropTypes.func
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

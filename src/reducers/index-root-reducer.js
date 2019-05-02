import buttonsReducer from './buttons-reducer';
import tamagotchiReducer from './tamagotchi-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tamagotchi: tamagotchiReducer,
  buttons: buttonsReducer
});

export default rootReducer;

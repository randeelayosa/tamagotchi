import buttonsReducer from './buttons-reducer';
import tamagotchiReducer from './tamagotchi-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tamagotchiReducer: tamagotchiReducer,
  buttonsReducer: buttonsReducer
});

export default rootReducer;

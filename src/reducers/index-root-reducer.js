import buttonsReducer from './buttons-reducer';
import tamagotchiReducer from './tamagotchi-reducer';
import iconsReducer from './icons-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tamagotchi: tamagotchiReducer,
  buttons: buttonsReducer,
  icons: iconsReducer
});

export default rootReducer;

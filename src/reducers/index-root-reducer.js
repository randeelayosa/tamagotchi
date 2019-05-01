import buttonsReducer from './buttons-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  buttonsReducer: buttonsReducer
});

export default rootReducer;

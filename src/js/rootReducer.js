import { combineReducers } from 'redux';
import mainReducer from './components/Reducers';

const rootReducer = combineReducers({
  main: mainReducer
});

export default rootReducer;

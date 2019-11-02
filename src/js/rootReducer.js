import { combineReducers } from 'redux';
import mainReducer from './components/Search/mainReducer';

const rootReducer = combineReducers({
  main: mainReducer
});

export default rootReducer;

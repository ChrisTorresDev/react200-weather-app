import { combineReducers } from 'redux';
import formReducer from './components/Form/formReducer';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import quote from './quote/reducer';

const reducers = combineReducers({
  quote
});

export default reducers;
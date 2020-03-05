import { combineReducers } from 'redux';
import AddorDeleteTansaction from './AddorDeleteTansaction';
import CurrencyRate from './currencyRate';
import Errors from './Errors';

const rootReducer = combineReducers({
  AddorDeleteTansaction,
  CurrencyRate,
  Errors,
});

export default rootReducer;

import { combineReducers } from 'redux';
import AddorDeleteTansaction from './AddorDeleteTansaction';
import CurrencyRate from './currencyRate';

const rootReducer = combineReducers({
  AddorDeleteTansaction,
  CurrencyRate,
});

export default rootReducer;

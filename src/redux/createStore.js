import { combineReducers, createStore } from 'redux';
import languageReducer from './language';
import modeReducer from './mode';

const reducer = combineReducers({
  mode: modeReducer,
  language: languageReducer,
});

const store = (preloadedState) => createStore(reducer, preloadedState);

export default store;

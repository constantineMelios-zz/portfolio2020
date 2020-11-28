import { combineReducers, createStore } from 'redux';
import languageReducer from './language';
import modeReducer from './mode';

const reducer = combineReducers({
  mode: modeReducer,
  language: languageReducer,
});

export default (preloadedState) => createStore(reducer, preloadedState);

import {combineReducers} from redux;

import { UPDATE_USER, UPDATE_CONTACT } from './actions';

//const {createStore, combineReducers} = require('redux')

const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload);
    case UPDATE_CONTACT:
      return(merge(state, {prevContact: action.payload}));
    default:
      return state;
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer;

import {combineReducers} from redux;

import { UPDATE_USER, UPDATE_CONTACT } from './actions';

//const {createStore, combineReducers} = require('redux')

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
  if(action.type === UPDATE_CONTACT){
    return [...state, action.payload]
  }
  return state
}

const userReducer = (state = {}, action) => {
  if(action.type === UPDATE_USER){
    return merge(state, action.payload)
  }
  if(action.type === UPDATE_CONTACT){
    return(merge(state, {prevContact: action.payload}))
  }
  return state
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer;

import {createStore} from redux;
//const {createStore, combineReducers} = require('redux')
import reducer from './reducer'

const store = createStore(reducer, DEFAULT_STATE)

store.dispatch(updateUser({foo: "foo"}))
store.dispatch(updateUser({bar: "bar"}))
store.dispatch(updateUser({foo: "baz"}))

store.dispatch(addContact({name: 'MyName', number: '12345687'}))
store.dispatch(addContact({name: 'YourName', number: '5678934567'}))

console.log(store.getState())

export default store;

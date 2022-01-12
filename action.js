//action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer
    this.state = initialState
  }

  getState() {
    return this.state
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update)
  }
}

const DEFAULT_STATE = {user: {}, contacts: []}
const merge = (prev, next) => Object.assign({}, prev, next)
const contactReducer = (state, newContact) => [...state, newContact]
const userReducer = (state, update) => merge(state, update)

const reducer = (state, action) => {
  if(action.type === UPDATE_USER){
    return merge(state, {user: userReducer(state.user, action.payload)})
  }

  if(action.type === UPDATE_CONTACT){
    return merge(state, {contacts: contactReducer(state.contacts, action.payload)})
  }

  return state
}
const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update
})

const updateContact = (update) => ({
  type: UPDATE_CONTACT,
  payload: update
})

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch(updateUser({foo: "foo"}))
store.dispatch(updateUser({bar: "bar"}))
store.dispatch(updateUser({foo: "baz"}))

store.dispatch(updateContact({name: 'MyName', number: '12345687'}))

console.log(store.getState())

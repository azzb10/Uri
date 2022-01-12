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
  if(action.type === 'UPDATE_USER'){
    return merge(state, {user: userReducer(state.user, action.payload)})
  }

  if(action.type === 'UPDATE_CONTACT'){
    return merge(state, {contacts: contactReducer(state.contacts, action.payload)})
  }

  return state
}

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch({type: 'UPDATE_USER', payload: {foo: "foo"}})
store.dispatch({type: 'UPDATE_USER', payload: {bar: "bar"}})
store.dispatch({type: 'UPDATE_USER', payload: {foo: "baz"}})

console.log(store.getState())

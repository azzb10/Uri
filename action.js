class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer
    this.state = initialState
  }

  getState() {
    return this.state
  }

  dispatch(update){
    this.state = this.reducer(this.state, update)
  }
}
const merge = (prev, next) => Object.assign({}, prev, next)
const userReducer = (state, update) => merge(state, update)

const reducer = (state, action) => {
  if(action === 'UPDATE_USER'){
    merge(state, {user: userReducer(state.user, action.payload)})
  }
}

const store = new Store(reducer, {})

store.dispatch({type: 'UPDATE_USER', payload: {foo: "foo"}})
store.dispatch({type: 'UPDATE_USER', payload: {bar: "bar"}})
store.dispatch({type: 'UPDATE_USER', payload: {foo: "baz"}})

console.log(store.getState())

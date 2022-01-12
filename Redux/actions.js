//action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

//action creators
const updateUser = update => ({
  type: UPDATE_USER,
  payload: update
})

const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
})

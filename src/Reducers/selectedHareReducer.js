
const initialState = {
  name: '',
  carrots: null,
  id: null
}

const selectedHare = (state = initialState , action) => {
  switch (action.type) {
    case 'SELECT_HARE':
      return Object.assign({}, state, { name: action.name, carrots: action.carrots, id: action.id })

    default:
      return state
  }
}

export default selectedHare

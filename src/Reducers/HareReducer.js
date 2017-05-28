import uniqid from 'uniqid'

const initialState = [
  {
    name: 'Jacek',
    carrots: 5,
    id: 1
  },
  {
    name: 'Adam',
    carrots: 10,
    id: 2
  }
]

const removeByID = (state = [], id) => {
  const hares = state.filter(hare => hare.id !== id)
  return hares
}

const findByID = (state = [], id, carrots) => {
  const hare = state.filter(hare => hare.id === id ? hare.carrots += carrots : hare)
  return hare
}

const hare = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HARE':
      return {
        name: action.name,
        carrots: action.carrots,
        id: uniqid()
      }

    default:
      return state

  }
}

const hares = (state = initialState, action) => {
  let hares = null
  switch (action.type) {
    case 'ADD_HARE':
      return [
        ...state,
        hare(undefined, action)
      ]

    case 'DELETE_HARE':
      hares = removeByID(state, action.id)
      return hares

    case 'ADD_CARROTS':
      hares = findByID(state, action.id, action.carrots)
      return hares

    default:
      return state

  }
}

export default hares

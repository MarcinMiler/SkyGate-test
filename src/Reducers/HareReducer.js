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

const removeByID = (state = [], id ) => {
  const hares = state.filter(hare => hare.id !== id);
  return hares;
}

const hare = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HARE':
      return {
        name: action.name,
        carrots: action.carrots,
        id: uniqid
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


    default:
      return state

  }
}

export default hares

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

const hare = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HARE_PROFILE':
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
  switch (action.type) {

    case 'ADD_HARE_PROFILE':
      return [
        ...state,
        hare(undefined, action)
      ]

    default:
      return state

  }
}

export default hares

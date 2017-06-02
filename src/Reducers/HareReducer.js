import uniqid from 'uniqid'
import initialState from '../FakeAPI/FakeAPI'

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

    case 'SORT':
      // let min = state[0].carrots
      // let max = state[0].carrots
      //
      // for(let i = 1; i < state.length; i++) {
      //   if(state[i].carrots < min) {
      //     min = state[i].carrots
      //   }
      //   if(state[i].carrots > max) {
      //     max = state[i].carrots
      //   }
      // }
      //
      // let count = []
      // let arr = []
      // let names = []
      // let i
      // let x
      //
      // for(i=0;i<state.length; i++) {
      //   arr[i] = state[i].carrots
      //   names[i] = state[i].name
      // }
      //
      // for(i = 0; i <= max; i++) {
      //   count[i] = 0
      // }
      //
      // for(i = 0; i < state.length; i++) {
      //   count[state[i].carrots]++
      // }
      //
      // for(i = 0; i < max; i++) {
      //   count[i+1] += count[i]
      // }
      //
      //
      // for(i = 0; i < state.length; i++) {
      //   x = count[arr[i]]
      //   state[x-1].carrots = arr[i]
      //   state[x-1].name = names[i]
      // }

      state.sort((a, b) => {
        if (a.carrots > b.carrots)
          return -1
        if (a.carrots < b.carrots)
          return 1
        return 0
      })

      return state

    default:
      return state

  }
}

export default hares

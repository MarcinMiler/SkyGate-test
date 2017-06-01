
export const addHare = (name, carrots) => ({
  type: 'ADD_HARE',
  name,
  carrots
})

export const deleteHare = (id) => ({
  type: 'DELETE_HARE',
  id
})

export const selectHare = (name, carrots, id) => ({
  type: 'SELECT_HARE',
  name,
  carrots,
  id
})

export const addCarrots = (carrots, id) => ({
  type: 'ADD_CARROTS',
  carrots,
  id
})

export const sort = () => ({
  type: 'SORT',
})

// export const addHareAndSort = (name, carrots) => {
//   return dispatch => {
//     dispatch(addHare(name, carrots))
//     dispatch(sort())
//   }
// }

import * as actions from '../Actions'

describe('actions', () => {
  it('should create a new hare', () => {
    const name = 'Marcin'
    const carrots = 10
    const expectedAction = {
      type: 'ADD_HARE',
      name,
      carrots
    }
    expect(actions.addHare(name, carrots)).toEqual(expectedAction)
  })

  it('should delete a hare', () => {
    const id = 1
    const expectedAction = {
      type: 'DELETE_HARE',
      id
    }
    expect(actions.deleteHare(id)).toEqual(expectedAction)
  })

  it('should select a hare', () => {
    const name = 'Jacek'
    const carrots = 5
    const id = 1
    const expectedAction = {
      type: 'SELECT_HARE',
      name,
      carrots,
      id
    }
    expect(actions.selectHare(name, carrots, id)).toEqual(expectedAction)
  })

  it('should add carrots', () => {
    const carrots = 10
    const id = 1
    const expectedAction = {
      type: 'ADD_CARROTS',
      carrots,
      id
    }
    expect(actions.addCarrots(carrots, id)).toEqual(expectedAction)
  })

  it('should add carrots', () => {
    const carrots = 10
    const id = 1
    const expectedAction = {
      type: 'ADD_CARROTS',
      carrots,
      id
    }
    expect(actions.addCarrots(carrots, id)).toEqual(expectedAction)
  })

})

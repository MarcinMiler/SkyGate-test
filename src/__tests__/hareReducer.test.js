import hareReducer from '../Reducers/HareReducer'
import fakeAPI from '../FakeAPI/FakeAPI'

describe('Hare reducer', () => {
  it('should return initialState', () => {
    expect(
      hareReducer(undefined, {})
    ).toEqual(fakeAPI)
  })

  it('should handle ADD_HARE', () => {
    expect(
      hareReducer([], {
        type: 'ADD_HARE',
        name: 'Marcin',
        carrots: 10
      })
    ).toEqual([
      {
        name: 'Marcin',
        carrots: 10,
        id: 201
      }
    ])
  })

  it('should handle DELETE_HARE', () => {
    expect(
      hareReducer([
        {
          name: 'Marcin',
          carrots: 10,
          id: 201
        }
      ], {
        type: 'DELETE_HARE',
        id: 201
      })
    ).toEqual([
    ])
  })

  it('should handle ADD_CARROTS', () => {
    expect(
      hareReducer([
        {
          name: 'Marcin',
          carrots: 10,
          id: 201
        }
      ], {
        type: 'ADD_CARROTS',
        carrots: 100,
        id: 201
      })
    ).toEqual([
      {
        name: 'Marcin',
        carrots: 110,
        id: 201
      }
    ])
  })
})

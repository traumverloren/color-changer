import reducer from './index';

describe('color reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('white')
  })

  it('should handle CHANGE_COLOR', () => {
    expect(
      reducer(undefined, {type: 'CHANGE_COLOR', color: 'blue'})
    ).toEqual('blue')
  })
})

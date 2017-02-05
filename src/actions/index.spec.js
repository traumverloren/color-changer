import * as actions from './index';

describe('actions', () => {
  it('should create an action to change the color', () => {
    const color = 'perwinkle'
    const expectedAction = {
      type: 'CHANGE_COLOR',
      color
    }
    expect(actions.changeColor(color)).toEqual(expectedAction)
  })
})

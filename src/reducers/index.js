const reducer = (state = 'white', action) => {
  switch (action.type){
    case 'CHANGE_COLOR':
      return action.color;
    default:
      return state;
  }
};

export default reducer

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'SELECT_BUTTON':
    const { buttonId } = action;
    newState = Object.assign({}, state, {
      buttonId: buttonId
    });
    console.log('buttonId', buttonId);
    return newState;
  default:
    return state;
  }
};

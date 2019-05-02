export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'SELECT_BUTTON':
    const { buttonId } = action;
    newState = ({}, state, {
      buttonId: buttonId
    });
    return newState;
  default:
    return state;
  }
};

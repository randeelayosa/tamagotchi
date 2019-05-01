export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BUTTON':
    return action.buttonId;
  default:
    return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BUTTON':
    const { buttonId } = action;
    let newState = ({}, state, {
      buttonId: buttonId,
    });
    return newState;
    default:
    return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_ICON':
    const { iconId } = action;
    let newState = ({}, state, {
      iconId: iconId,
    });
    return newState;
  default:
    return state;
  }
};

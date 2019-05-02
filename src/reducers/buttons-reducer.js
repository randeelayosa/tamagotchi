export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'CREATE_TAMAGOTCHI':
    const { activity, hunger, happiness, health } = action;
    newState = Object.assign({}, state, {
      chicken: {
        activity: 100,
        hunger: 100,
        happiness: 100,
        health: 100
      }
    });
    return newState;

    case 'SELECT_BUTTON':
    const { buttonId } = action;
    newState = ({}, state, {
      buttonId: buttonId
    })

    return newState;

    default:
    return state;
  }
};

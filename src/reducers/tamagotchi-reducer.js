export default (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_TAMAGOTCHI':
    const { activity, hunger, happiness, health  } = action;
    let newState = Object.assign({}, state, {
      chicken: {
        activity: activity,
        hunger: hunger,
        happiness: happiness,
        health: health
      }

    });
    return newState;
  default:
    return state;
  }
};

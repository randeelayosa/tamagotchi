export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'UPDATE_TAMAGOTCHI':
    const { activity, hunger, happiness, health  } = action;
    newState = Object.assign({}, state, {
      chicken: {
        activity: activity,
        hunger: hunger,
        happiness: happiness,
        health: health
      }
    });
    return newState;
    case 'CREATE_TAMAGOTCHI':
    newState = Object.assign({}, state, {
      chicken: {
        activity: 100,
        hunger: 100,
        happiness: 100,
        health: 100,
        active: null
      }
    });
    return newState;
    case 'ACTIVATE_TAMAGOTCHI':
    newState = ({}, state, {
      chicken: {
        active: true
      }
    });
    return newState;
    case 'DEACTIVATE_TAMAGOTCHI':
    newState = ({}, state, {
      chicken: {
        active: false
      }
    });
    return newState;
    default:
    return state;
  }
};

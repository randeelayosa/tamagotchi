export default (state = { }, action) => {
  let newState;
  switch (action.type) {
  case 'UPDATE_TAMAGOTCHI':
    const { activity, hunger, happiness } = action;
    newState = Object.assign({}, {
      activity: activity,
      hunger: hunger,
      happiness: happiness,
      health: activity + hunger + happiness
    });
    return newState;
  case 'CREATE_TAMAGOTCHI':
    newState = Object.assign({}, state, {

      activity: 100,
      hunger: 100,
      happiness: 100,
      health: 300,
      active: true
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

export default (state = {active: null}, action) => {
  let newState;
  let { activity, hunger, happiness, active } = action;
  switch (action.type) {
  case 'UPDATE_TAMAGOTCHI':
    newState = Object.assign({}, {
      activity: activity,
      hunger: hunger,
      happiness: happiness,
      health: activity + hunger + happiness,
      active: active
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
    newState = Object.assign({}, state, {
      activity: activity,
      hunger: hunger,
      happiness: happiness,
      health: activity + happiness + hunger,
      active: true
    });
    return newState;
  case 'DEACTIVATE_TAMAGOTCHI':
    newState = Object.assign({}, state, {
      activity: activity,
      hunger: hunger,
      happiness: happiness,
      health: activity + happiness + hunger,
      active: false
    });
    return newState;
  default:
    return state;
  }
};

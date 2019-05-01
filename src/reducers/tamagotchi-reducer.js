export default (state = {  chicken: {
    activity: 100,
    hunger: 100,
    happiness: 100,
    health: 300
  }}, action) => {
  switch (action.type) {
    case 'NEW_TAMAGOTCHI':
      let newState = Object.assign({}, state, {

      });
      return newState;
    default:
      return state;
  }
};

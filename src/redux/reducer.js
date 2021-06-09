import { HIT_DAMAGE } from './constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case HIT_DAMAGE:
      return { ...state, stamina: state.stamina - payload.damage };
    default:
      return state;
  }
};
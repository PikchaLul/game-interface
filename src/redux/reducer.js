import { HIT_DAMAGE, CHANGE_NAME } from "./constants";

export default (state = {}, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CHANGE_NAME:
      return { ...state, name: payload.name };
    case HIT_DAMAGE:
      return { ...state, stamina: state.stamina - payload.damage };
    default:
      return state;
  }
};

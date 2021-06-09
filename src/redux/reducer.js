import {
  HIT_DAMAGE,
  CHANGE_NAME,
  CREATE_CHARACTER,
  INCREMENT_STAT,
  DECREMENT_STAT,
} from "./constants";
import { updateBasicCharacteristics } from "../helpers";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_STAT: {
      const { statName } = payload;

      const {
        name,
        parameters: { power, agility, intelligence, charisma },
      } = state;

      return {
        ...state,
        ...updateBasicCharacteristics({
          name,
          power: power.value,
          agility: agility.value,
          intelligence: intelligence.value,
          charisma: charisma.value,
          [statName]: (state.parameters[statName].value || 0) + 1,
        }),
      };
    }
    case DECREMENT_STAT: {
      const { statName } = payload;

      const {
        name,
        parameters: { power, agility, intelligence, charisma },
      } = state;

      return {
        ...state,
        ...updateBasicCharacteristics({
          name,
          power: power.value,
          agility: agility.value,
          intelligence: intelligence.value,
          charisma: charisma.value,
          [statName]:
            state.parameters[statName].value > 0
              ? (state.parameters[statName].value || 0) - 1
              : 0,
        }),
      };
    }
    case CREATE_CHARACTER: {
      const { name, power, agility, intelligence, charisma } = payload;

      return {
        ...state,
        ...updateBasicCharacteristics({
          name,
          power,
          agility,
          intelligence,
          charisma,
        }),
      };
    }
    case CHANGE_NAME:
      return { ...state, name: payload.name };
    case HIT_DAMAGE: {
      return {
        ...state,
        stamina:
          state.stamina - payload.damage >= 0
            ? state.stamina - payload.damage
            : 0,
      };
    }

    default:
      return state;
  }
};

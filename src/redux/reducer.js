import {
  HIT_DAMAGE,
  CHANGE_NAME,
  CREATE_CHARACTER,
  INCREMENT_STAT,
  DECREMENT_STAT,
  TRAIN,
  LOAD_CHARACTER,
} from "./constants";
import { updateBasicCharacteristics, calcBasicParameters } from "../helpers";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_STAT: {
      const { statName } = payload;
      const { parameters } = state;

      const newState = {
        ...state,
        parameters: {
          ...parameters,
          [statName]: {
            ...parameters[statName],
            value: (parameters[statName].value || 0) + 1,
          },
        },
      };

      return calcBasicParameters(newState);
    }
    case DECREMENT_STAT: {
      const { statName } = payload;
      const { parameters } = state;

      const newState = {
        ...state,
        parameters: {
          ...parameters,
          [statName]: {
            ...parameters[statName],
            value:
              parameters[statName].value > 0
                ? (parameters[statName].value || 0) - 1
                : 0,
          },
        },
      };

      return calcBasicParameters(newState);
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
      const { stamina } = state;
      const { damage } = payload;

      return {
        ...state,
        stamina: stamina - damage >= 0 ? stamina - damage : 0,
      };
    }
    case TRAIN: {
      const { parameterKey, abilityKey } = payload;
      const { parameters } = state;

      return {
        ...state,
        parameters: {
          ...parameters,
          [parameterKey]: {
            ...parameters[parameterKey],
            abilities: {
              ...parameters[parameterKey].abilities,
              [abilityKey]: {
                ...parameters[parameterKey].abilities[abilityKey],
                value:
                  parameters[parameterKey].abilities[abilityKey].value < 5 &&
                  parameters[parameterKey].value >
                    parameters[parameterKey].abilities[abilityKey].value
                    ? parameters[parameterKey].abilities[abilityKey].value + 1
                    : parameters[parameterKey].abilities[abilityKey].value,
              },
            },
          },
        },
      };
    }
    case LOAD_CHARACTER: {
      const { character } = payload;

      return {
        ...character,
      };
    }
    default:
      return state;
  }
};

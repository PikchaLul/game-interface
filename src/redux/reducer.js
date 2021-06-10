import {
  HIT_DAMAGE,
  CHANGE_NAME,
  CREATE_CHARACTER,
  INCREMENT_STAT,
  DECREMENT_STAT,
  TRAIN,
  LOAD_CHARACTER,
} from "./constants";
import { updateBasicCharacteristics } from "../helpers";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_STAT: {
      const { statName } = payload;

      const newState = {
        ...state,
        parameters: {
          ...state.parameters,
          [statName]: {
            ...state.parameters[statName],
            value: (state.parameters[statName].value || 0) + 1,
          },
        },
      };

      newState.stamina = 3 + +newState.parameters.power.value;
      newState.evasion = 10 + +newState.parameters.agility.value;
      newState.energy =
        +newState.parameters.intelligence.value +
        +newState.parameters.agility.value;

      return newState;
    }
    case DECREMENT_STAT: {
      const { statName } = payload;

      const newState = {
        ...state,
        parameters: {
          ...state.parameters,
          [statName]: {
            ...state.parameters[statName],
            value:
              state.parameters[statName].value > 0
                ? (state.parameters[statName].value || 0) - 1
                : 0,
          },
        },
      };

      newState.stamina = 3 + +newState.parameters.power.value;
      newState.evasion = 10 + +newState.parameters.agility.value;
      newState.energy =
        +newState.parameters.intelligence.value +
        +newState.parameters.agility.value;

      return newState;
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
    case TRAIN: {
      const { parameterKey, abilityKey } = payload;
      console.log(parameterKey, abilityKey);
      return {
        ...state,
        parameters: {
          ...state.parameters,
          [parameterKey]: {
            ...state.parameters[parameterKey],
            abilities: {
              ...state.parameters[parameterKey].abilities,
              [abilityKey]: {
                ...state.parameters[parameterKey].abilities[abilityKey],
                value:
                  state.parameters[parameterKey].abilities[abilityKey].value <
                    5 &&
                  state.parameters[parameterKey].value >
                    state.parameters[parameterKey].abilities[abilityKey].value
                    ? state.parameters[parameterKey].abilities[abilityKey]
                        .value + 1
                    : state.parameters[parameterKey].abilities[abilityKey]
                        .value,
              },
            },
          },
        },
      };
    }
    case LOAD_CHARACTER:{
      const {character} = payload;
      console.log(character);

      return {
        ...character
      }
    }
    default:
      return state;
  }
};

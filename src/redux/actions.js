import {
  HIT_DAMAGE,
  CHANGE_NAME,
  CREATE_CHARACTER,
  FAILED,
  INCREMENT_STAT,
  DECREMENT_STAT,
  TRAIN,
  LOAD_CHARACTER,
} from "./constants";

export const hitDamage = (damage) => ({
  type: HIT_DAMAGE,
  payload: { damage },
});

export const createNewCharacter = (newCharacter) => ({
  type: CREATE_CHARACTER,
  payload: { ...newCharacter },
});

export const changeName = (name) =>
  name ? { type: CHANGE_NAME, payload: { name } } : { type: FAILED };

export const increment = (statName) => ({
  type: INCREMENT_STAT,
  payload: { statName },
});

export const decrement = (statName) => ({
  type: DECREMENT_STAT,
  payload: { statName },
});

export const train = ({ parameterKey, abilityKey }) => ({
  type: TRAIN,
  payload: { parameterKey, abilityKey },
});

export const loadCharacter = (character) => ({
  type: LOAD_CHARACTER,
  payload: { character },
});

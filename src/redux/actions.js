import { HIT_DAMAGE, CHANGE_NAME, CREATE_CHARACTER, FAILED } from "./constants";

export const hitDamadge = (damage) => ({
  type: HIT_DAMAGE,
  payload: { damage },
});

export const createNewCharacter = (newCharacter) => ({
  type: CREATE_CHARACTER,
  payload: { ...newCharacter },
});

export const changeName = (name) =>
  name ? { type: CHANGE_NAME, payload: { name } } : { type: FAILED };

import { HIT_DAMAGE, CHANGE_NAME, FAILED } from './constants';

export const hitDamadge = (damage) => ({ type: HIT_DAMAGE, payload: {damage} });
export const changeName = (name) => (name ? { type: CHANGE_NAME, payload: {name} } : {type: FAILED});
import { HIT_DAMAGE } from './constants';

export const hitDamadge = (damage) => ({ type: HIT_DAMAGE, payload: {damage} });
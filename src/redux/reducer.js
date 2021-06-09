import { HIT_DAMAGE, CHANGE_NAME, CREATE_CHARACTER } from "./constants";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CHARACTER:
      const {name, power, agility, intelligence, charisma} = payload;

      return {
        ...state,
        name: name,
        stamina: 3 + +power,
        evasion: 10 + +agility,
        energy: +intelligence + +charisma,
        parameters: {
          power: {
            name: "Сила",
            value: +power,
            abilities: {
              attack: {
                name: "Атака",
                value: 0,
              },
            },
          },
          agility: {
            name: "Ловкость",
            value: +agility,
            abilities: {
              stealth: {
                name: "Стелс",
                value: 0,
              },
              archery: {
                name: "Стрельба из лука",
                value: 0,
              },
            },
          },
          intelligence: {
            name: "Интеллект",
            value: +intelligence,
            abilities: {
              learnability: {
                name: "Обучаемость",
                value: 0,
              },
              survivability: {
                name: "Выживание",
                value: 0,
              },
              medical: {
                name: "Медицина",
                value: 0,
              },
            },
          },
          charisma: {
            name: "Харизма",
            value: +charisma,
            abilities: {
              bullying: {
                name: "Запугивание",
                value: 0,
              },
              insight: {
                name: "Проницательность",
                value: 0,
              },
              appearance: {
                name: "Внешний вид",
                value: 0,
              },
              manipulation: {
                name: "Манипулирование",
                value: 0,
              },
            },
          },
        },
      };
    case CHANGE_NAME:
      return { ...state, name: payload.name };
    case HIT_DAMAGE:
      return { ...state, stamina: state.stamina - payload.damage };
    default:
      return state;
  }
};

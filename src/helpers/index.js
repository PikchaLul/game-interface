export const updateBasicCharacteristics = ({name, power, agility, intelligence, charisma}) => ({
    name: name,
    stamina: 3 + +power,
    evasion: 10 + +agility,
    energy: +intelligence + +agility,
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
  });
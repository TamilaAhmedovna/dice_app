import getRandomDices from "../utils/get-random-dices"

const dices = getRandomDices()

export const initialData = {
    dices,
    columns: {
        diceColumn: {
            id: 'diceColumn',
            title: 'Dices',
            taskIds: Object.keys(dices)
        },
        operatorsColumn: {
            id: 'operatorsColumn',
            title: 'Operators',
            taskIds: []
        },
        boardColumn: {
            id: 'boardColumn',
            title: 'Board',
            taskIds: []
        }
    },
    columnOrder: ['diceColumn', 'operatorsColumn', 'boardColumn']
}

// export default initialData;

import getRandomDices from "../utils/get-random-dices"
import getRandomOperators from "../utils/get-random-operators"

const dices = getRandomDices()
const operators = getRandomOperators()

export const initialData = {
    dices,
    operators,
    columns: {
        dicesColumn: {
            id: 'dicesColumn',
            title: 'Dices',
            taskIds: Object.keys(dices)
        },
        operatorsColumn: {
            id: 'operatorsColumn',
            title: 'Operators',
            taskIds: Object.keys(operators)
        },
        boardColumn: {
            id: 'boardColumn',
            title: 'Board',
            taskIds: []
        }
    },
    columnOrder: ['dicesColumn', 'operatorsColumn', 'boardColumn']
}

// export default initialData;

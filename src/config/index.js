import getRandomDices from "../utils/get-random-dices"
import { getRandomOperators } from "../utils/get-random-operators"

const dices = getRandomDices()
const operators = getRandomOperators()

const initialData = {
    dices,
    operators,
    columns: {
        dicesColumn: {
            id: 'dicesColumn',
            title: 'Dices',
            itemIds: Object.keys(dices)
        },
        operatorsColumn: {
            id: 'operatorsColumn',
            title: 'Operators',
            itemIds: Object.keys(operators)
        },
        boardColumn: {
            id: 'boardColumn',
            title: 'Board',
            itemIds: []
        }
    },
    // columnOrder: ['dicesColumn', 'operatorsColumn', 'boardColumn']
}

export default initialData;

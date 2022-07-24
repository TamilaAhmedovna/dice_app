const getDices = () => {
    const dices = {}
    const numbers = [1, 2, 3, 4, 5, 6]
    const randomNumbers = numbers.sort(() => Math.random() - 0.5);
    randomNumbers.pop()
    randomNumbers.map(num => dices[`dice${num}`] = { id: num, content: num })

    return dices;
}
const dices = getDices()

const initialData = {
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

export default initialData;

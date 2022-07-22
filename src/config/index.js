const getDices = () => {
    const dices = {}
    const numbers = [1, 2, 3, 4, 5, 6]
    const randomNumbers = numbers.sort(() => Math.random() - 0.5);
    randomNumbers.pop()
    randomNumbers.map(num => dices[`dice${num}`] = { id: num, content: num })

    return dices;
}

const initialData = {
    dices: getDices(),
    columns: {
        diceColumn: {
            id: '1',
            title: 'Dices',
            taskIds: ['dice1', 'dice2', 'dice3', 'dice', 'dice5']
        },
        operatorsColumn: {
            id: 2,
            title: 'Operators',
            taskIds: []
        },
        boardColumn: {
            id: 3,
            title: 'Board',
            taskIds: []
        }
    },
    columnOrder: ['diceColumn']
}

export default initialData;
